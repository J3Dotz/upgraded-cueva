import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name     = (data.get('name')     as string)?.trim();
  const email    = (data.get('email')    as string)?.trim();
  const checkin  = (data.get('checkin')  as string)?.trim();
  const checkout = (data.get('checkout') as string)?.trim();
  const guests   = (data.get('guests')   as string) ?? '2';
  const room     = (data.get('room')     as string) ?? '';
  const message  = (data.get('message')  as string)?.trim() ?? '';

  // Basic validation
  if (!name || !email || !checkin || !checkout) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  const formatDate = (s: string) =>
    new Date(s).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const { error } = await resend.emails.send({
    from: 'La Cueva de Miravet <enquiries@lacuevademiravet.com>',
    to:   ['hola@lacuevademiravet.com'],
    replyTo: email,
    subject: `New enquiry from ${name}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; color: #2C2B28;">
        <h2 style="font-weight: 400; color: #2D4A3E;">New booking enquiry</h2>
        <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding:8px 0; border-bottom:1px solid #eee; width:140px; color:#6B6860; font-size:13px;">Name</td>
              <td style="padding:8px 0; border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px 0; border-bottom:1px solid #eee; color:#6B6860; font-size:13px;">Email</td>
              <td style="padding:8px 0; border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 0; border-bottom:1px solid #eee; color:#6B6860; font-size:13px;">Check-in</td>
              <td style="padding:8px 0; border-bottom:1px solid #eee;">${formatDate(checkin)}</td></tr>
          <tr><td style="padding:8px 0; border-bottom:1px solid #eee; color:#6B6860; font-size:13px;">Check-out</td>
              <td style="padding:8px 0; border-bottom:1px solid #eee;">${formatDate(checkout)}</td></tr>
          <tr><td style="padding:8px 0; border-bottom:1px solid #eee; color:#6B6860; font-size:13px;">Guests</td>
              <td style="padding:8px 0; border-bottom:1px solid #eee;">${guests}</td></tr>
          <tr><td style="padding:8px 0; border-bottom:1px solid #eee; color:#6B6860; font-size:13px;">Room</td>
              <td style="padding:8px 0; border-bottom:1px solid #eee;">${room || 'Any available'}</td></tr>
          <tr><td style="padding:8px 0; color:#6B6860; font-size:13px; vertical-align:top;">Message</td>
              <td style="padding:8px 0;">${message || '—'}</td></tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error('[enquiry] Resend error:', error);
    return new Response(JSON.stringify({ error: 'Email send failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
