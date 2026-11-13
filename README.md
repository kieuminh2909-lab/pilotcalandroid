# Pilot Sampling – Android app (Capacitor + React)

Your original component is in `src/App.tsx` (calculations untouched).
Only changes: Copy / Export CSV use native Android clipboard + share sheet, and safe-area padding.

## Build the APK (needs Node 18+, Android Studio or JDK 21 + Android SDK)
    npm install
    npm run sync        # builds web app and copies it into android/
    npm run open        # opens Android Studio -> Build > Build APK(s)
or from the command line (ANDROID_HOME set):
    npm run apk         # -> android/app/build/outputs/apk/debug/app-debug.apk

Install the APK on your phone (enable "install unknown apps"), or press Run in Android Studio with the phone plugged in.

## Dev in browser
    npm run dev

## Notes
- App id: com.aql.pilotsampling (change in capacitor.config.ts before publishing to Play Store).
- For Play Store you need a signed release build (Build > Generate Signed Bundle).

## Deploy to Vercel
Push this folder to GitHub, then on vercel.com: Add New > Project > import the repo > Deploy.
Vercel auto-detects Vite (build: `npm run build`, output: `dist`). Or from the CLI:
    npx vercel --prod
