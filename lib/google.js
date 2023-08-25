import { google } from 'googleapis';

export const oauth2Client = new google.auth.OAuth2(
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_CLIENT_REDIRECT_URI
);

google.options({ auth: oauth2Client });

export const scopes = {
  openid: ['openid', 'email', 'profile'],
  media: [
    'https://mail.google.com/',
    'https://www.googleapis.com/auth/documents',
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/youtube',
  ],
  cloud: ['https://www.googleapis.com/auth/cloud-platform'],
  dev: {
    get() {
      return [
        ...this.cloud,
        'https://www.googleapis.com/auth/firebase',
        'https://www.googleapis.com/auth/webmasters',
        'https://www.googleapis.com/auth/siteverification',
        'https://www.googleapis.com/auth/indexing',
      ];
    },
  },
};
