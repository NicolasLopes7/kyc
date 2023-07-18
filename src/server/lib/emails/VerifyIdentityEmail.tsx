import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

type VerifyIdentityEmailProps = {
  validationCode: string;
  email: string;
};

export const VerifyIdentityEmail = ({
  validationCode,
  email,
}: VerifyIdentityEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Heading style={secondary}>
          Verify your account with the code below.
        </Heading>
        <Section style={codeContainer}>
          <Text style={code}>{validationCode}</Text>
        </Section>
        <Text style={paragraph}>
          You{"'"}re not? {email}
        </Text>
        <Text style={paragraph}>
          Contact{" "}
          <Link href="mailto:login@acme.inc" style={link}>
            login@acme.inc
          </Link>{" "}
          if you did not request this code.
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  width: "360px",
  margin: "0 auto",
  padding: "68px 0 130px",
};

const secondary = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "0",
  marginTop: "0",
  textAlign: "center" as const,
};

const codeContainer = {
  background: "rgba(0,0,0,.05)",
  borderRadius: "4px",
  margin: "16px auto 14px",
  verticalAlign: "middle",
  width: "280px",
};

const code = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Bold",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center" as const,
};

const paragraph = {
  color: "#444",
  fontSize: "15px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  letterSpacing: "0",
  lineHeight: "23px",
  padding: "0 40px",
  margin: "0",
  textAlign: "center" as const,
};

const link = {
  color: "#444",
  textDecoration: "underline",
};
