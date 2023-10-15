"use client";

import useSpeechRecognition from "@/hooks/useSpeechRecognition";
import { useEffect } from "react";

const SpeechClient = () => {
  const { startListeningUserCommand } = useSpeechRecognition();
  useEffect(() => {
    startListeningUserCommand();
  }, []);
  return null;
};

export default SpeechClient;
