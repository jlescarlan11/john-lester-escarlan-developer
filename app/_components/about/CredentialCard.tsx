import { CREDENTIALS } from "@/data/credential";
import React from "react";
import StyledLink from "../common/StyledLink";

const CredentialCard = () => {
  return (
    <>
      <div className="relative group">
        <div className="space-y-3 transition-all duration-300 group-hover:border-foreground/20 bg-background/50">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-px bg-foreground/40" aria-hidden="true" />
            <h3 className="text-2">Credentials</h3>
          </div>
          <ul className="space-y-4" aria-label="Professional credentials">
            {CREDENTIALS.map((credential, index) => (
              <li key={index} className="text-3">
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <StyledLink label="About Me" href="/about" />
    </>
  );
};

export default CredentialCard;
