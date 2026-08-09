# Rajesh Gym Buddy

A mobile-first, installable static workout tracker.

## Features
- 5-day beginner workout split
- One-tap YouTube form links for every exercise
- Mark exercises complete
- Save weight used, reps, RPE and notes
- Daily completion percentage
- Body-weight log
- Saves data locally on the phone/browser using localStorage
- PWA support: can be added to the phone Home Screen
- Works well with GitHub Pages

## Publish on GitHub Pages

1. Create a new public repository on GitHub, for example `gym-buddy`.
2. Upload all files from this project into the repository root.
3. Commit the files.
4. In GitHub open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**, then save.
7. GitHub will show the public Pages URL after deployment.

Typical URL:
`https://YOUR-USERNAME.github.io/gym-buddy/`

## Add to your phone

### iPhone
Open the Pages URL in Safari → Share → **Add to Home Screen**.

### Android
Open it in Chrome → menu → **Add to Home screen** / **Install app**.

## Important
Workout data is currently stored only on the device/browser where you use the app.
Clearing browser/site data will remove the saved logs.

If you later want cloud sync/login, use Firebase or Supabase.
