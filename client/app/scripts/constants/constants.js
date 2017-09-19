/**
 * COLLECTIONS per company
 * defines the 'type' used by the form config, etc.
 */
angular.module('fccApp').constant('UserInfo', {
    user: 'admin',
    pass: 'test',
    token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBzdGVzdCIsIm9wZXJhdG9ySWQiOiJQUzAiLCJncm91cHMiOnsiTkdDIjp7InJvbGVzIjpbImdyYWRlcl9tZSIsImFkbWluIiwibmdjX29wZXJhdGlvbnMiLCJuY3Nfb3BlcmF0aW9ucyIsImdyYWRlciIsImdyYWRlcl92cCJdLCJwZXJtaXNzaW9ucyI6eyJuY3MiOnRydWUsImdyIjp0cnVlLCJxYyI6dHJ1ZSwicGx1cyI6dHJ1ZSwibWUiOnRydWUsImJrIjp0cnVlLCJ2ZXIiOnRydWUsImN0Ijp0cnVlLCJjbl9ub2dyYWRlIjp0cnVlLCJyZWMiOnRydWUsImFkbWluIjp0cnVlLCJ2cCI6dHJ1ZSwiY24iOnRydWUsImV4Ijp0cnVlfX19LCJpYXQiOjE0OTMxNDE5ODAsImV4cCI6MTQ5MzIyODM4MH0.oGQS_1lKVTVyv9kVYB0xxPNTIcyuyTRtnsJ_nxtuxUOX7podNdQpd_5NLhNPnCy9OdIRp5Kyvj6zYO5fLG0OQ5Cg7IaoMvXhPAEQx2OlxUJMnsoy3OgvZdXgEoaoEAWhLrUXM13LL_zDZovMwi8UDZG2T-8SKrzkYOZwh4dSnDtO9IwyQJfPx1sBdT_Ej82aU3P1p-YZVyq2lcKwFAtrt6qayrL_2KhlPkUi-CAksU_SUXhNUSp2_u8e6yJ6NJAM4S6OSOVwR-BWHMtK7pvXHPV-EzHoJx2e-3ZeEbT2yPopNRyezyfzrG3Tl_Wy81eHkrgLDGmNjXMf2So9PguPCA'
});

/**
 * State transition names
 */
angular.module('fccApp').constant('STATES', {
    HOME: 'home',
    LOGIN: 'login'
});
