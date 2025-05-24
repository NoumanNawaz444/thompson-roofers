import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Column,
  Text,
  Row,
} from "@react-email/components";

function EmailTemplate({
  name,
  email,
  phone,
  service,
}: {
  name: string;
  email: string;
  phone: string;
  service: string;
}) {
  return (
    <Html>
      <Head>
        <title>Thomson Roofers - Form Submission</title>
        <style>
          {`
            body {
              margin: 0;
              padding: 0;
              background-color: #F9FAFB; /* gray-50 */
              font-family: Arial, sans-serif;
            }
            .container {
              max-width: 600px;
              margin: auto;
              background-color: #ffffff;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
            }
            .header {
              background-color: #78350F; /* yellow-900 */
              padding: 32px 24px;
              text-align: center;
              color: #ffffff;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: bold;
            }
            .section {
              padding: 24px 30px;
              color: #374151; /* gray-700 */
              font-size: 16px;
            }
            .section h2 {
              color: #78350F; /* yellow-900 */
              font-size: 20px;
              margin-bottom: 12px;
            }
            .footer {
              background-color: #FEF3C7; /* yellow-100 */
              padding: 16px;
              text-align: center;
              color: #78350F; /* yellow-900 */
              font-size: 14px;
              font-weight: 500;
            }
          `}
        </style>
      </Head>
      <Body>
        <Container className="container">
          <Section className="header">
            <h1>Thomson Roofers</h1>
            <Text>New Contact Form Submission</Text>
          </Section>
          <Section className="section">
            <Row>
              <Column>
                <h2>Contact Details</h2>
                <Text>
                  <strong>Name:</strong> {name} <br />
                  <strong>Email:</strong> {email} <br />
                  <strong>Phone:</strong> {phone} <br />
                  <strong>Service:</strong> We are interested in {service}.
                </Text>
              </Column>
            </Row>
          </Section>
          <Section className="footer">
            <Text>
              Thank you for reaching out!<br />
              A team member from Thomson Roofers will contact you soon.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default EmailTemplate;
