exports.creds = {
  allowHttpForRedirectUrl: true,
  clientID: '439b4e42-c446-49c8-aa57-7d38bfcfa059',
  clientSecret: 'kcs8Q~bFTTiwpw3MaKfI9EWGqTQJg24~LENfVc~y', 
  clockSkew: null,
  cookieEncryptionKeys: [ 
    { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
    { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
  ],
  identityMetadata: 'https://login.microsoftonline.com/eagle.onmicrosoft.com/v2.0/.well-known/openid-configuration', 
  issuer: null,
  loggingLevel: 'info',
  nonceLifetime: null,
  nonceMaxAmount: 5,
  passReqToCallback: false,
  redirectUrl: 'http://localhost:3000/auth/openid/return', 
  responseMode: 'form_post', 
  responseType: 'code id_token', 
  scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],
  useCookieInsteadOfSession: true,
  validateIssuer: false,
};

// The url you need to go to destroy the session with AAD
exports.destroySessionUrl = 'https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=http://localhost:3000';
