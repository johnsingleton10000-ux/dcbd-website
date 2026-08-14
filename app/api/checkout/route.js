import { STRIPE_MEMBERSHIP } from '../../../lib/constants';

export async function POST() {
  if (process.env.STRIPE_SECRET_KEY) {
    return Response.json({
      url: STRIPE_MEMBERSHIP,
      note: 'Use the live Inner Circle payment link until a secret-key session is configured for this repo.'
    });
  }

  return Response.json({ url: STRIPE_MEMBERSHIP });
}
