import { Webhook } from 'svix';
import { WebhookEvent } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { dbQuery } from '../db';
const processedWebhookIds = new Set<string>();

export async function POST(req: Request) {
  console.log('Webhook endpoint hit!');

  try {
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Check if we've already processed this webhook
    const webhookId = req.headers.get('svix-id') || '';
    if (processedWebhookIds.has(webhookId)) {
      console.log(`Webhook ${webhookId} already processed, skipping`);
      return new Response('Already processed', { status: 200 });
    }

    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
    if (!WEBHOOK_SECRET) {
      throw new Error(
        'Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local',
      );
    }

    // Get the headers
    const svix_id = req.headers.get('svix-id');
    const svix_timestamp = req.headers.get('svix-timestamp');
    const svix_signature = req.headers.get('svix-signature');

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response('Error occured -- no svix headers', {
        status: 400,
      });
    }

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent;

    // Verify the payload with the headers
    try {
      evt = wh.verify(body, {
        'svix-id': svix_id,
        'svix-timestamp': svix_timestamp,
        'svix-signature': svix_signature,
      }) as WebhookEvent;
    } catch (err) {
      console.error('Error verifying webhook:', err);
      return new Response('Error occured', {
        status: 400,
      });
    }

    // Do something with the payload
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
    console.log('Webhook body:', body);

    if (eventType === 'user.created') {
      try {
        const { data } = JSON.parse(body);
        const { first_name, username, profile_image_url, email_addresses } =
          data;
        // Check if user already exists to prevent duplicate creation
        const checkUserQuery = `
         SELECT id FROM users WHERE email = $1;
       `;
        const existingUser = await dbQuery(checkUserQuery, [
          email_addresses[0].email_address,
        ]);

        if (existingUser.rows?.length > 0) {
          console.log('User already exists, skipping creation');
          return NextResponse.json({ message: 'User already exists' });
        }
        const { email_address } = email_addresses[0];

        const query = `
          INSERT INTO users (name, username, profile_image_slug, password, email)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING *;
        `;

        const response = await dbQuery(query, [
          first_name,
          username,
          profile_image_url,
          'xfSLfHHV2x1*uc1K',
          email_address,
        ]);
        return NextResponse.json(response);
      } catch (error) {
        console.error('Error creating user:', error);
        return new Response('Internal Server Error', { status: 500 });
      }
    }

    return new Response('', { status: 200 });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
