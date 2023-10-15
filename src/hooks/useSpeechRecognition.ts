import { useEffect, useState } from "react";

const ANNOUNCEMENT =
  "Crafters support voice commands. Please say Enable Voice to activate the voice commands";
const ENABLE_COMMAND = "enablevoice";
const DISABLE_COMMAND = "disablevoice";
const ENABLE_ANNOUNCEMENT = "Voice Commands Activated";
const DISABLE_ANNOUNCEMENT = "Voice Commands Disabled";

let recognition: SpeechRecognition | null = null;

const useSpeechRecognition = () => {
  const [userCommand, setUserCommand] = useState("");
  const [isListeningUserCommand, setIsListeningUserCommand] = useState(false);

  const [systemVoice, setSystemVoice] = useState(ANNOUNCEMENT);
  const [isSystemSpeaking, setIsSystemSpeaking] = useState(true);

  const [isVoiceCommandEnabled, setIsVoiceCommandEnabled] = useState(false);

  const startListeningUserCommand = () => {
    try {
      recognition?.start();
    } catch (e) {
      console.error(e);
    }
  };

  const stopListeningUserCommand = () => {
    try {
      recognition?.stop();
    } catch (e) {
      console.error(e);
    }
  };

  function clearUtterInformation() {
    setIsSystemSpeaking(false);
    setSystemVoice("");
  }

  useEffect(() => {
    function init() {
      let autostart = true;
      if (typeof window !== "undefined") {
        if (
          "SpeechRecognition" in window ||
          "webkitSpeechRecognition" in window
        ) {
          const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

          if (recognition && recognition.abort) {
            recognition.abort();
          }

          recognition = new SpeechRecognition(); // initiate the speech recognition
          recognition.maxAlternatives = 1;
          recognition.continuous = window.location.protocol === "http:";
          recognition.lang = "en-IN";

          recognition.onstart = () => setIsListeningUserCommand(true);

          recognition.onend = () => {
            setIsListeningUserCommand(false);
            stopListeningUserCommand();
            console.log("autostart true");
            if (autostart) {
              console.log("autostart true");
              startListeningUserCommand();
            }
          };

          recognition.onresult = (e) => {
            const userTranscript = e.results[
              e.results.length - 1
            ][0]?.transcript
              ?.toLowerCase()
              .trim();
            setUserCommand(userTranscript);
            setIsSystemSpeaking(true);
          };

          recognition.onerror = (e) => {
            setIsSystemSpeaking(false);
            switch (e.error) {
              case "network":
                console.error("Speech recognition error:", e.error); // brave, arc
                break;
              case "not-allowed":
              case "service-not-allowed":
                autostart = false;
                break;
            }
          };
        } else {
          console.info("Your browser does not support speech recognition");
          setIsSystemSpeaking(false);
        }
      }
    }
    init();
  }, []);

  useEffect(() => {
    function utterInformation() {
      if (isSystemSpeaking) {
        console.log({ systemVoice });
        const utterance = new SpeechSynthesisUtterance(systemVoice);
        const synthesis = window.speechSynthesis;
        setTimeout(() => {
          const voices = synthesis.getVoices();
          const selectedVoice = voices.filter(
            (voice) => voice.lang === "en-IN",
          )[0];
          utterance.voice = selectedVoice;
          utterance.lang = selectedVoice.lang;
          console.log({
            utterance,
            synthesis,
            isSpeaking: speechSynthesis.speaking,
          });
          if (!speechSynthesis.speaking) {
            speechSynthesis.speak(utterance);
          }
        }, 2000);
        setIsSystemSpeaking(false);
      }
    }
    if (typeof window !== "undefined") {
      if ("SpeechSynthesisUtterance" in window && "speechSynthesis" in window) {
        utterInformation();
      }
    }
    return () => {
      clearUtterInformation();
    };
  }, [isSystemSpeaking, systemVoice]);

  useEffect(() => {
    function performUserAction() {
      console.log({ userCommand });
      let sanitizedCommand = userCommand
        .replace(/\s/g, "")
        .replace(/[,.-]/g, "");
      console.log({ sanitizedCommand });
      if (sanitizedCommand === ENABLE_COMMAND) {
        setSystemVoice(ENABLE_ANNOUNCEMENT);
        setIsSystemSpeaking(true);
        setIsVoiceCommandEnabled(true);
      }
      if (sanitizedCommand === DISABLE_COMMAND) {
        setSystemVoice(DISABLE_ANNOUNCEMENT);
        setIsSystemSpeaking(true);
        setIsVoiceCommandEnabled(false);
      }
      const commandActivator = "click";
      const command = sanitizedCommand.substring(
        commandActivator.length,
        userCommand.length,
      );
      console.log({ command });
      if (isVoiceCommandEnabled) {
        if (sanitizedCommand.includes("click")) {
          const commandActivator = "click";
          const command = sanitizedCommand.substring(
            commandActivator.length,
            userCommand.length,
          );
          console.log({ command });
          const anchor: HTMLAnchorElement | null = document.querySelector(
            `#${command}`,
          );
          console.log(anchor);
          anchor?.click();
        }
      } else {
        console.log("Voice command is not enabled");
      }
    }
    if (typeof window !== "undefined") {
      if ("SpeechSynthesisUtterance" in window || "speechSynthesis" in window) {
        performUserAction();
      }
    }
  }, [isVoiceCommandEnabled, userCommand]);

  return {
    startListeningUserCommand,
  };
};

export default useSpeechRecognition;
