"use client";

import { useEffect, useState } from "react";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzgS7BfzmTlAGEolKkKA5HCFcQbGLb-AI-e2QrMF0FvlUjhR6gszpwHE_KuqZYdTGTEzA/exec";

type Donation = {
  name: string;
  amount: number;
};

const SUPPORTERS_PER_PAGE = 15;

export default function Donate() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.json())
      .then((data) => setDonations(data))
      .catch((error) =>
        console.error("Error loading donations:", error)
      );
  }, []);

  const totalRaised = donations.reduce(
    (total, donation) => total + Number(donation.amount || 0),
    0
  );

  const supporterCount = donations.length;

  // Sort donations from highest amount to lowest
  const sortedDonations = [...donations].sort(
    (a, b) => Number(b.amount || 0) - Number(a.amount || 0)
  );

  // Pagination
  const totalPages = Math.ceil(supporterCount / SUPPORTERS_PER_PAGE);

  const startIndex = (currentPage - 1) * SUPPORTERS_PER_PAGE;

  const currentDonations = sortedDonations.slice(
    startIndex,
    startIndex + SUPPORTERS_PER_PAGE
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      className="mx-auto flex w-full max-w-(--breakpoint-lg) flex-col px-6 pb-20 sm:px-20 sm:pb-24"
      style={{ backgroundColor: "#4D5669", color: "#ffffff" }}
    >
      <h1 className="mt-32 text-xl font-bold uppercase sm:mt-64">
        Support us
      </h1>

      <h1 className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight">
        Be a catalyst for change
      </h1>

      <p className="mt-6 text-lg/7">
        At Solar Reach, we’re on a mission to bring safe, sustainable light to
        communities living without reliable electricity.
        <br />
        <br />
        Every donation directly funds the creation and distribution of
        solar-powered lights—tools that open doors to education, safety, and
        opportunity. With just one light, a child can finish their homework, a
        family can gather without fear, and a village can take a step toward a
        brighter future.
        <br />
        <br />
        <strong>Every dollar counts.</strong> Whether it’s $5 or $500, your
        contribution fuels renewable energy solutions with lasting impact.
        <br />
        <br />
        <strong>Join us today.</strong> Be part of a movement that brings light,
        hope, and possibility to those who need it most.
      </p>

      {/* Donation Stats */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl bg-white/10 p-8 text-center">
          <p className="text-4xl font-extrabold">
            $
            {totalRaised.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })}
          </p>

          <p className="mt-2 text-sm font-bold uppercase tracking-wide">
            Total Raised
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 p-8 text-center">
          <p className="text-4xl font-extrabold">{supporterCount}</p>

          <p className="mt-2 text-sm font-bold uppercase tracking-wide">
            Supporters
          </p>
        </div>
      </div>

      {/* PayPal Button */}
      <a
        href="https://www.paypal.com/donate/?hosted_button_id=NEG8XU6FJ3924"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 w-fit rounded-full bg-[#FFC439] px-10 py-4 text-xl font-bold text-black hover:opacity-90"
      >
        Donate with PayPal
      </a>

      {/* Supporter List */}
      <div className="mt-16">
        <h2 className="text-3xl font-extrabold">Our Supporters</h2>

        {donations.length === 0 ? (
          <p className="mt-6 text-lg">
            Be the first to support Solar Reach!
          </p>
        ) : (
          <>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white/10">
              {currentDonations.map((donation, index) => (
                <div
                  key={startIndex + index}
                  className="flex items-center justify-between border-b border-white/10 px-6 py-4 last:border-b-0"
                >
                  <span className="font-semibold">{donation.name}</span>

                  <span className="font-bold">
                    $
                    {Number(donation.amount).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="rounded-full bg-white/10 px-5 py-2 font-semibold transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← Previous
              </button>

              <span className="font-semibold">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="rounded-full bg-white/10 px-5 py-2 font-semibold transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
