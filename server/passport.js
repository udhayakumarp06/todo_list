const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID =
  "1096760327147-mn613640rbg69djuinaipb4esje02pqb.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "fac059f265df5c5ed442";
GITHUB_CLIENT_SECRET = "c23adda936ba36eba263ebf07d42a23c7bb8bd91";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
)
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });