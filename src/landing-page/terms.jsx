import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import {
  Link,
  createMuiTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Terms() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link onClick={handleClickOpen}>Terms And Conditions</Link>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Terms & Conditions"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <ThemeProvider theme={theme}>
              <Typography variant="body1" style={{ fontWeight: "300" }}>
                <p>
                  By downloading or using the app, these terms will
                  automatically apply to you – you should make sure therefore
                  that you read them carefully before using the app. You’re not
                  allowed to copy, or modify the app, any part of the app, or
                  our trademarks in any way. You’re not allowed to attempt to
                  extract the source code of the app, and you also shouldn’t try
                  to translate the app into other languages, or make derivative
                  versions. The app itself, and all the trade marks, copyright,
                  database rights and other intellectual property rights related
                  to it, still belong to GeoPicK.
                </p>{" "}
                <p>
                  GeoPicK is committed to ensuring that the app is as useful and
                  efficient as possible. For that reason, we reserve the right
                  to make changes to the app or to charge for its services, at
                  any time and for any reason. We will never charge you for the
                  app or its services without making it very clear to you
                  exactly what you’re paying for.
                </p>{" "}
                <p>
                  The GeoPicK app stores and processes personal data that you
                  have provided to us, in order to provide our Service. It’s
                  your responsibility to keep your phone and access to the app
                  secure. We therefore recommend that you do not jailbreak or
                  root your phone, which is the process of removing software
                  restrictions and limitations imposed by the official operating
                  system of your device. It could make your phone vulnerable to
                  malware/viruses/malicious programs, compromise your phone’s
                  security features and it could mean that the GeoPicK app won’t
                  work properly or at all.
                </p>{" "}
                <div>
                  <p>
                    The app does use third party services that declare their own
                    Terms and Conditions.
                  </p>{" "}
                  <p>
                    Link to Terms and Conditions of third party service
                    providers used by the app
                  </p>{" "}
                  <ul>
                    <li>
                      <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Play Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://firebase.google.com/terms/analytics"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Analytics for Firebase
                      </a>
                    </li>
                  </ul>
                </div>{" "}
                <p>
                  You should be aware that there are certain things that GeoPicK
                  will not take responsibility for. Certain functions of the app
                  will require the app to have an active internet connection.
                  The connection can be Wi-Fi, or provided by your mobile
                  network provider, but GeoPicK cannot take responsibility for
                  the app not working at full functionality if you don’t have
                  access to Wi-Fi, and you don’t have any of your data allowance
                  left.
                </p>{" "}
                <p></p>{" "}
                <p>
                  If you’re using the app outside of an area with Wi-Fi, you
                  should remember that your terms of the agreement with your
                  mobile network provider will still apply. As a result, you may
                  be charged by your mobile provider for the cost of data for
                  the duration of the connection while accessing the app, or
                  other third party charges. In using the app, you’re accepting
                  responsibility for any such charges, including roaming data
                  charges if you use the app outside of your home territory
                  (i.e. region or country) without turning off data roaming. If
                  you are not the bill payer for the device on which you’re
                  using the app, please be aware that we assume that you have
                  received permission from the bill payer for using the app.
                </p>{" "}
                <p>
                  Along the same lines, GeoPicK cannot always take
                  responsibility for the way you use the app i.e. You need to
                  make sure that your device stays charged – if it runs out of
                  battery and you can’t turn it on to avail the Service, GeoPicK
                  cannot accept responsibility.
                </p>{" "}
                <p>
                  With respect to GeoPicK’s responsibility for your use of the
                  app, when you’re using the app, it’s important to bear in mind
                  that although we endeavour to ensure that it is updated and
                  correct at all times, we do rely on third parties to provide
                  information to us so that we can make it available to you.
                  GeoPicK accepts no liability for any loss, direct or indirect,
                  you experience as a result of relying wholly on this
                  functionality of the app.
                </p>{" "}
                <p>
                  At some point, we may wish to update the app. The app is
                  currently available on Android & iOS – the requirements for
                  both systems(and for any additional systems we decide to
                  extend the availability of the app to) may change, and you’ll
                  need to download the updates if you want to keep using the
                  app. GeoPicK does not promise that it will always update the
                  app so that it is relevant to you and/or works with the
                  Android & iOS version that you have installed on your device.
                  However, you promise to always accept updates to the
                  application when offered to you, We may also wish to stop
                  providing the app, and may terminate use of it at any time
                  without giving notice of termination to you. Unless we tell
                  you otherwise, upon any termination, (a) the rights and
                  licenses granted to you in these terms will end; (b) you must
                  stop using the app, and (if needed) delete it from your
                  device.
                </p>{" "}
                <p>
                  <strong>INTELLECTUAL PROPERTY RIGHTS</strong>
                </p>
                <p>
                  Unless otherwise indicated, the Application is our proprietary
                  property and all source code, databases, functionality,
                  software, website designs, audio, video, text, photographs,
                  and graphics on the Application (collectively, the “Content”)
                  and the trademarks, service marks, and logos contained therein
                  (the “Marks”) are owned or controlled by us or licensed to us,
                  and are protected by copyright and trademark laws and various
                  other intellectual property rights and unfair competition laws
                  of the United Arab Emirates, foreign jurisdictions, and
                  international conventions. The Content and the Marks are
                  provided on the Application “AS IS” for your information and
                  personal use only. Except as expressly provided in these Terms
                  of Use, no part of the Application and no Content or Marks may
                  be copied, reproduced, aggregated, republished, uploaded,
                  posted, publicly displayed, encoded, translated, transmitted,
                  distributed, sold, licensed, or otherwise exploited for any
                  commercial purpose whatsoever, without our express prior
                  written permission. Provided that you are eligible to use the
                  Application, you are granted a limited license to access and
                  use the Application and to download or print a copy of any
                  portion of the Content to which you have properly gained
                  access solely for your personal, non-commercial use. We
                  reserve all rights not expressly granted to you in and to the
                  Application, Content, and the Marks.
                </p>
                <p>
                  <strong>USER REPRESENTATIONS</strong>
                </p>
                <p>
                  By using the Application, you represent and warrant that: (1)
                  all registration information you submit will be true,
                  accurate, current, and complete; (2) you will maintain the
                  accuracy of such information and promptly update such
                  registration information as necessary; (3) you have the legal
                  capacity and you agree to comply with these Terms of Use; (4)
                  you are not under the age of 13; (5) not a minor in the
                  jurisdiction in which you reside, or if a minor, you have
                  received parental permission to use the Site; (6) you will not
                  access the Application through automated or non-human means,
                  whether through a bot, script or otherwise; (7) you will not
                  use the Application for any illegal or unauthorized purpose;
                  and (8) your use of the Application will not violate any
                  applicable law or regulation. If you provide any information
                  that is untrue, inaccurate, not current, or incomplete, we
                  have the right to suspend or terminate your account and refuse
                  any and all current or future use of the Application(or any
                  portion thereof).
                </p>
                <p>
                  <strong>USER REGISTRATION</strong>
                </p>
                <p>
                  You may be required to register with the Application. You
                  agree to keep your password confidential and will be
                  responsible for all use of your account and password. We
                  reserve the right to remove, reclaim, or change a username you
                  select if we determine, in our sole discretion, that such
                  username is inappropriate, obscene, or otherwise
                  objectionable.
                </p>
                <p>
                  <strong>PROHIBITED ACTIVITIES</strong>
                </p>
                <p>
                  You may not access or use the Application for any purpose
                  other than that for which we make the Application available.
                  The Application may not be used in connection with any
                  commercial endeavors except those that are specifically
                  endorsed or approved by us. As a user of the Application, you
                  agree not to: 1. Systematically retrieve data or other content
                  from the Application to create or compile, directly or
                  indirectly, a collection, compilation, database, or directory
                  without written permission from us. 2. Make any unauthorized
                  use of the Application, including collecting usernames and/or
                  email addresses of users by electronic or other means for the
                  purpose of sending unsolicited email, or creating user
                  accounts by automated means or under false pretenses. 3. Use a
                  buying agent or purchasing agent to make purchases on the
                  Application. 4. Use the Application to advertise or offer to
                  sell goods and services. 5. Circumvent, disable, or otherwise
                  interfere with security-related features of the Application,
                  including features that prevent or restrict the use or copying
                  of any Content or enforce limitations on the use of the
                  Application and/or the Content contained therein. 6. Engage in
                  unauthorized framing of or linking to the Application. 7.
                  Trick, defraud, or mislead us and other users, especially in
                  any attempt to learn sensitive account information such as
                  user passwords; 8. Make improper use of our support services
                  or submit false reports of abuse or misconduct. 9. Engage in
                  any automated use of the system, such as using scripts to send
                  comments or messages, or using any data mining, robots, or
                  similar data gathering and extraction tools. 10. Interfere
                  with, disrupt, or create an undue burden on the Application or
                  the networks or services connected to the Application. 11.
                  Attempt to impersonate another user or person or use the
                  username of another user. 12. Sell or otherwise transfer your
                  profile. 13. Use any information obtained from the Application
                  in order to harass, abuse, or harm another person. 14. Use the
                  Application as part of any effort to compete with us or
                  otherwise use the Application and/or the Content for any
                  revenue-generating endeavor or commercial enterprise. 15.
                  Decipher, decompile, disassemble, or reverse engineer any of
                  the software comprising or in any way making up a part of the
                  Application. 16. Attempt to bypass any measures of the
                  Application designed to prevent or restrict access to the
                  Application, or any portion of the Application. 17. Harass,
                  annoy, intimidate, or threaten any of our employees or agents
                  engaged in providing any portion of the Application to you.
                  18. Delete the copyright or other proprietary rights notice
                  from any Content. 19. Copy or adapt the Application’s
                  software, including but not limited to Flash, PHP, HTML,
                  JavaScript, or other code. 20. Upload or transmit (or attempt
                  to upload or to transmit) viruses, Trojan horses, or other
                  material, including excessive use of capital letters and
                  spamming (continuous posting of repetitive text), that
                  interferes with any party’s uninterrupted use and enjoyment of
                  the Application or modifies, impairs, disrupts, alters, or
                  interferes with the use, features, functions, operation, or
                  maintenance of the Application. 21. Upload or transmit (or
                  attempt to upload or to transmit) any material that acts as a
                  passive or active information collection or transmission
                  mechanism, including without limitation, clear graphics
                  interchange formats (“gifs”), 1×1 pixels, web bugs, cookies,
                  or other similar devices (sometimes referred to as “spyware”
                  or “passive collection mechanisms” or “pcms”). 22. Except as
                  may be the result of standard search engine or Internet
                  browser usage, use, launch, develop, or distribute any
                  automated system, including without limitation, any spider,
                  robot, cheat utility, scraper, or offline reader that accesses
                  the Application, or using or launching any unauthorized script
                  or other software. 23. Disparage, tarnish, or otherwise harm,
                  in our opinion, us and/or the Application. 24. Use the
                  Application in a manner inconsistent with any applicable laws
                  or regulations.
                </p>
                <p>
                  <strong>USER GENERATED CONTRIBUTIONS</strong>
                </p>
                <p>
                  The Application may invite you to chat, contribute to, or
                  participate in blogs, message boards, online forums, play
                  games and other functionality, and may provide you with the
                  opportunity to create, submit, post, display, transmit,
                  perform, publish, distribute, or broadcast content and
                  materials to us or on the Application, including but not
                  limited to text, writings, video, audio, photographs,
                  graphics, comments, suggestions, or personal information or
                  other material (collectively, “Contributions”). Contributions
                  may be viewable by other users of the Application and through
                  third-party websites. As such, any Contributions you transmit
                  may be treated as non-confidential and non-proprietary. When
                  you create or make available any Contributions, you thereby
                  represent and warrant that: 1. The creation, distribution,
                  transmission, public display, or performance, and the
                  accessing, downloading, or copying of your Contributions do
                  not and will not infringe the proprietary rights, including
                  but not limited to the copyright, patent, trademark, trade
                  secret, or moral rights of any third party. 2. You are the
                  creator and owner of or have the necessary licenses, rights,
                  consents, releases, and permissions to use and to authorize
                  us, the Application, and other users of the Application to use
                  your Contributions in any manner contemplated by the
                  Application and these Terms of Use. 3. You have the written
                  consent, release, and/or permission of each and every
                  identifiable individual person in your Contributions to use
                  the name or likeness of each and every such identifiable
                  individual person to enable inclusion and use of your
                  Contributions in any manner contemplated by the Application
                  and these Terms of Use. 4. Your Contributions do not include
                  images of person(s) 5. Your Contributions are not false,
                  inaccurate, or misleading. 6. Your Contributions are not
                  unsolicited or unauthorized advertising, promotional
                  materials, pyramid schemes, chain letters, spam, mass
                  mailings, or other forms of solicitation. 7. Your
                  Contributions are not obscene, lewd, lascivious, filthy,
                  violent, harassing, libelous, slanderous, or otherwise
                  objectionable (as determined by us). 8. Your Contributions do
                  not ridicule, mock, disparage, intimidate, or abuse anyone. 9.
                  Your Contributions do not advocate the violent overthrow of
                  any government or incite, encourage, or threaten physical harm
                  against another. 10. Your Contributions do not violate any
                  applicable law, regulation, or rule. 11. Your Contributions do
                  not violate the privacy or publicity rights of any third
                  party. 12. Your Contributions do not contain any material that
                  solicits personal information from anyone under the age of 18
                  or exploits people under the age of 18 in a sexual or violent
                  manner. 13. Your Contributions do not violate any federal or
                  state law concerning child pornography, or otherwise intended
                  to protect the health or well-being of minors; 14. Your
                  Contributions do not include any offensive comments that are
                  connected to race, national origin, gender, sexual preference,
                  or physical handicap. 15. Your Contributions do not otherwise
                  violate, or link to material that violates, any provision of
                  these Terms of Use, or any applicable law or regulation. Any
                  use of the Application in violation of the foregoing violates
                  these Terms of Use and may result in, among other things,
                  termination or suspension of your rights to use the
                  Application.
                </p>
                <p>
                  <strong>CONTRIBUTION LICENSE</strong>
                </p>
                <p>
                  By posting your Contributions to any part of the Application,
                  or making Contributions accessible to the Application by
                  linking your account from the Application to any of your
                  social networking accounts, you automatically grant, and you
                  represent and warrant that you have the right to grant, to us
                  an unrestricted, unlimited, irrevocable, perpetual,
                  non-exclusive, transferable, royalty-free, fully-paid,
                  worldwide right, and license to host, use, copy, reproduce,
                  disclose, sell, resell, publish, broadcast, retitle, archive,
                  store, cache, publicly perform, publicly display, reformat,
                  translate, transmit, excerpt (in whole or in part), and
                  distribute such Contributions (including, without limitation,
                  your image and voice) for any purpose, commercial,
                  advertising, or otherwise, and to prepare derivative works of,
                  or incorporate into other works, such Contributions, and grant
                  and authorize sublicenses of the foregoing. The use and
                  distribution may occur in any media formats and through any
                  media channels. This license will apply to any form, media, or
                  technology now known or hereafter developed, and includes our
                  use of your name, company name, and franchise name, as
                  applicable, and any of the trademarks, service marks, trade
                  names, logos, and personal and commercial images you provide.
                  You waive all moral rights in your Contributions, and you
                  warrant that moral rights have not otherwise been asserted in
                  your Contributions.
                </p>
                <p>
                  <strong>
                    <i>
                      We do not assert any ownership over your Contributions.
                      You retain full ownership of all of your Contributions and
                      any intellectual property rights or other proprietary
                      rights associated with your Contributions. We are not
                      liable for any statements or representations in your
                      Contributions provided by you in any area on the
                      Application. You are solely responsible for your
                      Contributions to the Application and you expressly agree
                      to exonerate us from any and all responsibility and to
                      refrain from any legal action against us regarding your
                      Contributions.
                    </i>
                  </strong>
                </p>
                <p>
                  We have the right, in our sole and absolute discretion, (1) to
                  edit, redact, or otherwise change any Contributions; (2) to
                  re-categorize any Contributions to place them in more
                  appropriate locations on the Application; and (3) to
                  pre-screen or delete any Contributions at any time and for any
                  reason, without notice. We have no obligation to monitor your
                  Contributions.
                </p>
                <p>
                  <strong>Changes to This Terms and Conditions</strong>
                </p>{" "}
                <p>
                  We may update our Terms and Conditions from time to time.
                  Thus, you are advised to review this page periodically for any
                  changes. We will notify you of any changes by posting the new
                  Terms and Conditions on this page.
                </p>{" "}
                <p>These terms and conditions are effective as of 04-02-2021</p>{" "}
                <p>
                  <strong>Contact Us</strong>
                </p>{" "}
                <p>
                  If you have any questions or suggestions about our Terms and
                  Conditions, do not hesitate to contact us at
                  geopick2021@gmail.com.
                </p>{" "}
                <p>
                  This Terms and Conditions page was generated by{" "}
                  <a
                    href="https://app-privacy-policy-generator.webwoob.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App Privacy Policy Generator
                  </a>
                </p>
              </Typography>
            </ThemeProvider>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ThemeProvider theme={theme}>
            <Button
              onClick={handleClose}
              style={{ background: "#f56920", height: "50px", margin: "20px" }}
            >
              Close
            </Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>
    </div>
  );
}
