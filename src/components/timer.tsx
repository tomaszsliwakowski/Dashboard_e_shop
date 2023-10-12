"use client";
import { TimerType } from "@/types/type";
import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState<TimerType | undefined>(undefined);

  const TimeToExpire = () => {
    let dateTomorrow: Date = new Date();
    let date: Date = new Date();
    let tomorrow: Date = new Date(
      dateTomorrow.setDate(dateTomorrow.getDate() + 1)
    );
    let expireToday: number = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      12,
      0,
      0,
      0
    ).getTime();
    let expiretomorrow: number = new Date(
      tomorrow.getFullYear(),
      tomorrow.getMonth(),
      tomorrow.getDate(),
      12,
      0,
      0,
      0
    ).getTime();
    if (date.getHours() >= 12) {
      let remainingTime: number = expiretomorrow - date.getTime();
      setTimer({
        second: Math.floor((remainingTime / 1000) % 60),
        minutes: Math.floor((remainingTime / 1000 / 60) % 60),
        hour: Math.floor(remainingTime / 1000 / 60 / 60),
      });
    } else {
      let remainingTime: number = expireToday - date.getTime();
      setTimer({
        second: Math.floor((remainingTime / 1000) % 60),
        minutes: Math.floor((remainingTime / 1000 / 60) % 60),
        hour: Math.floor(remainingTime / 1000 / 60 / 60),
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      TimeToExpire();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="mt-2 flex flex-col items-center">
      <span className="text-xl max-sm:text-base">Koniec promocji za:</span>
      <div className="flex justify-center mt-2 ">
        <div className="flex flex-col px-2 items-center">
          <span className="text-3xl max-sm:text-xl px-1 py-1 bg-gray-200 rounded-md">
            {timer !== undefined
              ? timer.hour > 9
                ? timer?.hour
                : `0${timer?.hour}`
              : `00`}
          </span>
          <span className="text-sm text-center">godz.</span>
        </div>
        <span className="text-3xl max-sm:text-2xl">:</span>
        <div className="flex flex-col px-2">
          <span className="text-3xl max-sm:text-xl px-1 py-1 bg-gray-200 rounded-md">
            {timer !== undefined
              ? timer.minutes > 9
                ? timer?.minutes
                : `0${timer?.minutes}`
              : `00`}
          </span>
          <span className="text-sm text-center">min.</span>
        </div>
        <span className="text-3xl max-sm:text-2xl">:</span>
        <div className="flex flex-col px-2 ">
          <span className="text-3xl max-sm:text-xl px-1 py-1 bg-gray-200 rounded-md">
            {timer !== undefined
              ? timer.second > 9
                ? timer?.second
                : `0${timer?.second}`
              : `00`}
          </span>
          <span className="text-sm text-center">sek.</span>
        </div>
      </div>
    </div>
  );
}
