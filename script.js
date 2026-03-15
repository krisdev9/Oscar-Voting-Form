
        import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
        import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";
        const firebaseConfig = { 
             apiKey: "AIzaSyDHyEnug9H2vAxnwAnHeVj6sjA7FwUxKaI",
            authDomain: "oscar-voting-89026.firebaseapp.com",
            databaseURL: "https://oscar-voting-89026-default-rtdb.firebaseio.com/",
            projectId: "oscar-voting-89026",
            storageBucket: "oscar-voting-89026.firebasestorage.app",
            messagingSenderId: "368130050907",
            appId: "1:368130050907:web:5d83c4126bba0e7f0b287e",
            measurementId: "G-FY1944K3H8"
        };

        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app); // this is your "backend" reference
        
const userVotes =[];
document.getElementById("VotingForm").addEventListener("submit", function(event) //listen for event (submiting), and run following code
{
event.preventDefault(); //stop page from refreshing (would wipe user selections)
const username = document.getElementById("name").value; //read username from form
const BestPictureVote = document.querySelector('input[name="bestPicture"]:checked').value; //read checked box of each question
const BestActorVote = document.querySelector('input[name="bestActor"]:checked').value;
const BestSupportingActorVote = document.querySelector('input[name="bestSupportingActor"]:checked').value;
const BestActressVote = document.querySelector('input[name="bestActress"]:checked').value;
const BestSupportingActressVote = document.querySelector('input[name="bestSupportingActress"]:checked').value;
const BestAnimatedFeatureVote = document.querySelector('input[name="bestAnimatedFeature"]:checked').value;
const BestAnimatedShortVote = document.querySelector('input[name="bestAnimatedShort"]:checked').value;
const BestCastingVote = document.querySelector('input[name="bestCasting"]:checked').value;
const BestCinematographyVote = document.querySelector('input[name="bestCinematography"]:checked').value;
const BestCostumeVote = document.querySelector('input[name="bestCostume"]:checked').value;
const BestDirectorVote = document.querySelector('input[name="bestDirector"]:checked').value;
const BestDocumentaryFeatureVote = document.querySelector('input[name="bestDocumentaryFeature"]:checked').value;
const BestDocumentaryShortVote = document.querySelector('input[name="bestDocumentaryShort"]:checked').value;
const BestInternationalFeatureVote = document.querySelector('input[name="bestInternationalFeature"]:checked').value;
const BestLiveActionShortVote = document.querySelector('input[name="bestLiveActionShort"]:checked').value;
const BestMakeupVote = document.querySelector('input[name="bestMakeup"]:checked').value;
const BestOriginalScoreVote = document.querySelector('input[name="bestOriginalScore"]:checked').value;
const BestOriginalSongVote = document.querySelector('input[name="bestOriginalSong"]:checked').value;
const BestProductionDesignVote = document.querySelector('input[name="bestProductionDesign"]:checked').value;
const BestSoundDesignVote = document.querySelector('input[name="bestSoundDesign"]:checked').value;
const BestVisualEffectsVote = document.querySelector('input[name="bestVisualEffects"]:checked').value;
const BestAdaptedScreenplayVote = document.querySelector('input[name="bestAdaptedScreenplay"]:checked').value;
const BestOriginalScreenplayVote = document.querySelector('input[name="bestOriginalScreenplay"]:checked').value;
const finalVote =
    {
        name: username,
        answers: { BestPictureVote, BestActorVote, BestSupportingActorVote, BestActressVote,
            BestSupportingActressVote, BestAnimatedFeatureVote, BestAnimatedShortVote,
            BestCastingVote, BestCinematographyVote, BestCostumeVote, BestDirectorVote,
            BestDocumentaryFeatureVote, BestDocumentaryShortVote, BestInternationalFeatureVote,
            BestLiveActionShortVote, BestMakeupVote, BestOriginalScoreVote, BestOriginalSongVote,
            BestProductionDesignVote, BestSoundDesignVote, BestVisualEffectsVote,
            BestAdaptedScreenplayVote, BestOriginalScreenplayVote}
    };
userVotes.push(finalVote);
push(ref(db, "votes"),finalVote)
    .then(() => console.log("Vote sent!"))
    .catch(err => console.error(err));
console.log("Current Votes Array", userVotes);
document.body.innerHTML = `
        <h1>Thank you for voting, ${username}!</h1>
        <p>Check back after the Oscars for results, and to see how you compare to our other voters!</p>
    `;
});
    
