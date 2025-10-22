"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import styles from "./form.module.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";

//

const FormItem = () => {
  const [noEmail, setNoEmail] = React.useState(false);
  const [estimate, setEstimate] = React.useState("default");
  const [customEstimate, setCustomEstimate] = React.useState("");
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      // Let the browser show native validation UI
      form.reportValidity();
      e.preventDefault(); // prevent submit because form is invalid
      return;
    }

    e.preventDefault(); // prevent default submit for fetch when valid

    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/chedganemouhssine@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (res.ok) {
        setShowSuccess(true);
        form.reset();
        setNoEmail(false);
        setEstimate("default");
        setCustomEstimate("");
      } else {
        alert("There was a problem submitting your form.");
      }
    } catch (error) {
      alert("There was a problem submitting your form.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_subject"
          value="New message from Mico Supply"
        />

        <div className={styles.flex}>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="FULL NAME *"
            required
            className={styles.input}
          />
          {!noEmail ? (
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="EMAIL *"
              required
              className={styles.input}
              disabled={estimate === "private"}
            />
          ) : (
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="PHONE *"
              required
              className={styles.input}
            />
          )}
        </div>

        <div className={styles.dont}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="noEmail"
            onChange={(e) => setNoEmail(e.target.checked)}
          />
          <label className={styles.h3} htmlFor="noEmail">
            Don&apos;t have an email?
          </label>
        </div>

        <Input
          id="company"
          name="company"
          type="text"
          placeholder="COMPANY *"
          required
          className={styles.input}
        />

        <Textarea
          className={styles.input}
          placeholder="DESCRIBE YOUR PROJECT *."
          required
          rows={4}
          name="projectDescription"
        />

        <Select
          required
          value={estimate}
          onValueChange={(val) => setEstimate(val)}
          name="estimate"
        >
          <SelectTrigger className={styles.input}>
            <SelectValue placeholder="SPECIFY AN APPROXIMATE ESTIMATE." />
          </SelectTrigger>
          <SelectContent className={styles.group}>
            <SelectGroup>
              <SelectLabel style={{ color: "#B4B4B4" }}>
                SPECIFY AN APPROXIMATE ESTIMATE
              </SelectLabel>

              <SelectItem className={styles.item} value="basic">
                200 - 800
              </SelectItem>
              <SelectItem className={styles.item} value="mid">
                1.5k - 5k
              </SelectItem>
              <SelectItem className={styles.item} value="midExtra">
                7.5k - 10k
              </SelectItem>
              <SelectItem className={styles.item} value="pro">
                15k+
              </SelectItem>
              <SelectItem className={styles.item} value="costumPrice">
                Custom Price
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {estimate === "costumPrice" && (
          <Input
            name="customEstimate"
            placeholder="PLEASE DESCRIBE YOUR BUDGET"
            value={customEstimate}
            onChange={(e) => setCustomEstimate(e.target.value)}
            required
            className={styles.input}
            style={{ textTransform: "uppercase" }}
          />
        )}

        <Button
          type="submit"
          className={styles.input}
          style={{
            cursor: "pointer",
            border: "none",
            fontSize: "1.6rem",
            padding: "2rem 0",
          }}
        >
          &bull; SUBMIT YOUR RESPONSE
        </Button>
      </form>

      {/* Success alert */}

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}
          >
            <Alert variant="default" className={styles.alert}>
              <AlertTitle>Good Job!</AlertTitle>
              <AlertDescription className={styles.desc}>
                Your form has been submitted successfully.
              </AlertDescription>
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                aria-label="Close alert"
              >
                &times;
              </button>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FormItem;
