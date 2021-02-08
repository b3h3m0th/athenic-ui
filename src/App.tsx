import React, { useState } from "react";
import packageJson from "../package.json";
import "./index.scss";

import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import * as faIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { H1 } from "./components/H1";
import { H2 } from "./components/H2";
import { H3 } from "./components/H3";
import { Button } from "./components/Button";
import { IconButton } from "./components/Button";
import { Badge } from "./components/Badge";
import { Spinner } from "./components/Spinner";
import { TextInput } from "./components/TextInput";
import { Card } from "./components/Card";
import { Link } from "./components/Link";
import { Counter } from "./components/Counter";
import { Collapse } from "./components/Collapse";
import { Stepper } from "./components/Stepper";
import { Rating } from "./components/Rating";
import { Modal } from "./components/Modal";
import { Avatar } from "./components/Avatar";
import { Comment } from "./components/Comment";
import { Alert } from "./components/Alert";
import { Switch } from "./components/Switch";
import { RadioGroup } from "./components/RadioGroup";
import value from "*.png";
import { SearchInput } from "./components/SearchInput";
import { OTPInput } from "./components/OTPInput";

const App = () => {
  const stepperCardExampleSteps = [
    "Add personal info",
    "Verify your E-Mail",
    "Complete Registration",
  ];
  const [stepperCardExample, setStepperCardExample] = useState(1);

  const [ratingDisplay, setRatingDisplay] = useState(0);
  const [ratingDisplayEmoji, setRatingDisplayEmoji] = useState(0);

  const [defaultModalShown, setDefaultModalShown] = useState(false);
  const [bottomLeftModalShown, setBottomLeftModalShown] = useState(false);
  const [bottomRightModalShown, setBottomRightModalShown] = useState(false);

  const [exampleAlertShown, setExampleAlertShown] = useState(true);

  const [otpInputAlertShown, setOtpInputAlertShown] = useState(false);

  return (
    <div id="App">
      <H1>Headers</H1>

      <H1 style={{ color: "var(--color-light-red)" }}>Athenic UI - H1</H1>
      <H2>Athenic UI - H2</H2>
      <H3>Athenic UI - H3</H3>

      <H1>Buttons</H1>
      <H2>Size</H2>
      <Button
        style={{ marginLeft: 0 }}
        size="small"
        onHover={() => console.log("hovered")}
        onClick={() => console.log("clicked")}
      >
        Small
      </Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>

      <H2>Colors</H2>
      <Button variant="primary" style={{ marginLeft: 0 }}>
        Primary
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="success">Success</Button>
      <Button variant="error">Error</Button>
      <Button variant="warning">Warning</Button>

      <H2>With icon</H2>
      <Button
        style={{ marginLeft: 0 }}
        iconBefore={faShoppingBag}
        variant="tertiary"
        size="medium"
      >
        Icon before
      </Button>
      <Button iconAfter={faShoppingBag} variant="tertiary" size="medium">
        Icon after
      </Button>

      <H2>With link</H2>
      <Button
        variant="primary"
        link={packageJson.repository.url}
        style={{ marginLeft: 0 }}
      >
        🐱 Link to the Github-Repo
      </Button>

      <H2>Disabled</H2>
      <Button style={{ marginLeft: 0 }} size="small" disabled={true}>
        disabled - small
      </Button>
      <Button size="medium" disabled={true}>
        disabled - medium
      </Button>
      <Button size="large" disabled={true}>
        disabled - large
      </Button>

      <H2>Icon Button</H2>
      <IconButton style={{ marginLeft: 0 }} icon={faShoppingBag} size="small" />
      <IconButton
        style={{ marginLeft: 0 }}
        icon={faShoppingBag}
        size="medium"
      />
      <IconButton style={{ marginLeft: 0 }} icon={faShoppingBag} size="large" />

      <H1>All Icons</H1>
      <Link to={`https://fontawesome.com/`} text="Icons by Font Awesome" />
      <Card size="auto" style={{ marginLeft: 0 }}>
        {Object.values(faIcons).map((f: any, i: number) => (
          <FontAwesomeIcon icon={f} style={{ margin: 5 }} key={i} />
        ))}
      </Card>

      <H1>Badges</H1>
      <H2>Tint</H2>
      <Badge label="primary" style={{ marginRight: 0 }} />
      <Badge label="secondary" variant="secondary" />
      <Badge label="tertiary" variant="tertiary" />
      <Badge label="success" variant="success" />
      <Badge label="warning" variant="warning" />
      <Badge label="error" variant="error" />

      <H2>Solid</H2>
      <Badge label="primary" solid={true} style={{ marginRight: 0 }} />
      <Badge label="secondary" variant="secondary" solid={true} />
      <Badge label="tertiary" variant="tertiary" solid={true} />
      <Badge label="success" variant="success" solid={true} />
      <Badge label="warning" variant="warning" solid={true} />
      <Badge label="error" variant="error" solid={true} />

      <H1>Spinner</H1>
      <H2>Variants</H2>
      <Spinner />
      <Spinner variant="secondary" />
      <Spinner variant="tertiary" />

      <H2>Size</H2>
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />

      <H2>Custom Speed</H2>
      <Spinner speed={500} />
      <Spinner speed={2000} />

      <H1>Card</H1>
      <H2>Size</H2>
      <Card size="small" />
      <Card />
      <Card size="large" />

      <H2>Example</H2>
      <Card title="Athenic UI - Login" size="auto" style={{ marginLeft: 0 }}>
        <TextInput placeholder="Password" />
        <TextInput placeholder="E-Mail" type="password" />
        <Button>✌️ Athenic UI Sign In</Button>
      </Card>

      <H1>Link</H1>
      <H2>Standard</H2>
      <p>
        This is a simple <Link to={packageJson.repository.url} text="Link" /> to
        the Athenic UI Github-Repo.
      </p>

      <H2>Target new Tab</H2>
      <p>
        Here is another sample{" "}
        <Link to={packageJson.repository.url} text="Link" target="_blank" />.
      </p>

      <H1>Counter</H1>
      <H2>Size</H2>
      <Counter size="small" end={5000} />
      <Counter end={5000} />
      <Counter size="large" end={5000} />

      <H2>Duration</H2>
      <Counter size="small" end={5000} duration={2} />
      <Counter size="small" end={5000} duration={5} />

      <H2>With prefix</H2>
      <Counter size="small" prefix="$ " end={5000} />
      <Counter size="small" prefix="€ " end={5000} />

      <H2>With suffix</H2>
      <Counter size="small" suffix=" Users" end={5000} />
      <Counter size="small" suffix=" satisfied customers" end={5000} />

      <H2>With delay</H2>
      <Counter size="small" delay={2} end={5000} />

      <H1>Collapse</H1>
      <Collapse
        content={[{ header: "Tab 1", content: "Content of Tab 1" }]}
      ></Collapse>
      <Collapse
        content={[
          { header: "Tab 1", content: "Content of Tab 1" },
          { header: "Tab 2", content: "Content of Tab 2" },
          { header: "Tab 3", content: "Content of Tab 3" },
          { header: "Tab 4", content: "Content of Tab 4" },
        ]}
      ></Collapse>

      <H2>With initial opened</H2>
      <Collapse
        content={[
          { header: "Tab 1", content: "Content of Tab 1" },
          { header: "Tab 2", content: "Content of Tab 2" },
          { header: "Tab 3", content: "Content of Tab 3" },
        ]}
        initialActiveTabs={[0]}
      ></Collapse>

      <H2>Nesting Elements in Collapse</H2>
      <Collapse
        content={[
          {
            header: "Tab 1",
            content: (
              <Button
                text="👋 I'm hiding in here... :D"
                style={{ marginLeft: 0 }}
              />
            ),
          },
          { header: "Tab 2", content: "Content of Tab 2" },
          { header: "Tab 3", content: "Content of Tab 3" },
        ]}
        initialActiveTabs={[0]}
      ></Collapse>

      <H2>Combined with Card</H2>
      <Card size="auto">
        <Collapse
          content={[
            {
              header: "Tab 1",
              content: (
                <Button
                  text="👋 I'm hiding in here... :D"
                  style={{ marginLeft: 0 }}
                />
              ),
            },
            { header: "Tab 2", content: "Content of Tab 2" },
            { header: "Tab 3", content: "Content of Tab 3" },
          ]}
          initialActiveTabs={[0]}
        ></Collapse>
      </Card>

      <H1>Stepper</H1>
      <H2>Horizontal</H2>
      <Stepper
        currentStep={1}
        direction="horizontal"
        steps={[
          // "Create your account",
          "Sign Up",
          "Verify your Account",
          "Complete registration",
        ]}
      />
      <Stepper
        currentStep={2}
        direction="horizontal"
        steps={[
          // "Create your account",
          "Sign Up",
          "Verify your Account",
          "Complete registration",
        ]}
      />
      <Stepper
        currentStep={3}
        direction="horizontal"
        steps={[
          // "Create your account",
          "Sign Up",
          "Verify your Account",
          "Complete registration",
        ]}
      />
      <Stepper
        currentStep={4}
        direction="horizontal"
        steps={[
          // "Create your account",
          "Sign Up",
          "Verify your Account",
          "Complete registration",
        ]}
      />

      <H2>Vertical</H2>
      <Stepper
        currentStep={1}
        direction="vertical"
        steps={["Add personal info", "Add payment details", "Complete payment"]}
      />
      <Stepper
        currentStep={2}
        direction="vertical"
        steps={["Add personal info", "Add payment details", "Complete payment"]}
      />
      <Stepper
        currentStep={3}
        direction="vertical"
        steps={["Add personal info", "Add payment details", "Complete payment"]}
      />
      <Stepper
        currentStep={4}
        direction="vertical"
        steps={["Add personal info", "Add payment details", "Complete payment"]}
      />

      <H2>Combined with Card</H2>
      <Card title="💳 Payment Process" size="auto" style={{ paddingBottom: 0 }}>
        <Stepper
          currentStep={3}
          steps={[
            "Add personal info",
            "Add payment details",
            "Complete payment",
          ]}
        />
      </Card>

      <H2>Example with React states</H2>

      <Card title="Register">
        <Stepper
          currentStep={stepperCardExample}
          steps={stepperCardExampleSteps}
        />
        <br />
        <Button
          size="small"
          variant="primary"
          onClick={() => {
            stepperCardExample > 1
              ? setStepperCardExample(stepperCardExample - 1)
              : null;
            console.log(stepperCardExample);
          }}
        >
          👈 Previous
        </Button>
        <Button
          size="small"
          variant="primary"
          onClick={() => {
            stepperCardExample <= stepperCardExampleSteps.length
              ? setStepperCardExample(stepperCardExample + 1)
              : null;
            console.log(stepperCardExample);
          }}
        >
          Next 👉
        </Button>
      </Card>

      <H1>Rating</H1>
      <H2>Size</H2>
      <Rating variant="star" size="small" />
      <Rating variant="star" />
      <Rating variant="star" size="large" />

      <H2>Initial Rating</H2>
      <Rating variant="star" initialRating={3} />

      <H2>onRate Event</H2>
      <Rating
        variant="star"
        onRate={(value: number) => setRatingDisplay(value)}
      />
      <span>{ratingDisplay} / 5</span>

      <H2>Emoji</H2>
      <Rating
        variant="emoji"
        onRate={(value: number) => setRatingDisplayEmoji(value)}
      />
      <span>{ratingDisplayEmoji} / 5</span>

      <H1>Modal</H1>
      <Button
        style={{ marginLeft: 0 }}
        onClick={() => setDefaultModalShown(!defaultModalShown)}
      >
        😮‍💨 Open Modal
      </Button>
      <Modal
        shown={defaultModalShown}
        title="🍍 Yo! I'm a fresh Modal and this is a very, very long title. It goes on and on and should break just right about here :)"
        onClose={() => setDefaultModalShown(false)}
      >
        <Button
          size="small"
          style={{ marginLeft: 0 }}
          onClick={() => setDefaultModalShown(false)}
        >
          Nah, I'm fine
        </Button>
        <Button
          variant="error"
          size="small"
          style={{ marginLeft: 0 }}
          onClick={() => setDefaultModalShown(false)}
        >
          Delete?
        </Button>
      </Modal>

      <H2>Position bottomLeft</H2>
      <Button
        style={{ marginLeft: 0 }}
        onClick={() => setBottomLeftModalShown(!defaultModalShown)}
      >
        ↙️ Open Modal bottomLeft
      </Button>
      <Modal
        shown={bottomLeftModalShown}
        title="🥝 Yo! I'm another fresh Modal"
        onClose={() => setBottomLeftModalShown(false)}
        position="bottomLeft"
      >
        <Button
          size="small"
          style={{ marginLeft: 0 }}
          onClick={() => setBottomLeftModalShown(false)}
        >
          Nah, I'm fine
        </Button>
        <Button
          variant="error"
          size="small"
          style={{ marginLeft: 0 }}
          onClick={() => setBottomLeftModalShown(false)}
        >
          Delete?
        </Button>
      </Modal>

      <H2>Position bottomRight</H2>
      <Button
        style={{ marginLeft: 0 }}
        onClick={() => setBottomRightModalShown(!defaultModalShown)}
      >
        Open Modal bottomRight ↘️
      </Button>
      <Modal
        shown={bottomRightModalShown}
        title="🍓 Yo! I'm fresh too"
        onClose={() => setBottomRightModalShown(false)}
        position="bottomRight"
      >
        <Button
          size="small"
          style={{ marginLeft: 0 }}
          onClick={() => setBottomRightModalShown(false)}
        >
          Nah, I'm fine
        </Button>
        <Button
          variant="error"
          size="small"
          style={{ marginLeft: 0 }}
          onClick={() => setBottomRightModalShown(false)}
        >
          Delete?
        </Button>
      </Modal>

      <H1>Avatar</H1>
      <H2>Size</H2>
      <Avatar size="small" />
      <Avatar />
      <Avatar size="large" />

      <H2>Notifications</H2>
      <Avatar size="small" notifications={4} />
      <Avatar size="medium" notifications={10} />
      <Avatar size="large" notifications={100} />

      <H2>Link</H2>
      <Avatar link={packageJson.repository.url} notifications={4} />

      <H1>Comment</H1>
      <Comment
        style={{ marginLeft: 0 }}
        author={{
          name: "Behemoth",
        }}
        text="Made with ❤️ by... well me ;)"
        likes={666}
      />
      <Comment
        style={{ marginLeft: 0 }}
        author={{
          name: "ReactLover42",
          avatar: "https://source.unsplash.com/1600x900/?game",
          link: "https://source.unsplash.com/",
        }}
        text="Athenic UI is the best option!"
      />
      <Comment
        style={{ marginLeft: 0 }}
        author={{
          name: "Guest20",
        }}
        text="Love it!"
        likes={18}
      />
      <Comment
        style={{ marginLeft: 0 }}
        author={{
          name: "Hand Pedre",
        }}
        text="Great Library!"
        likes={18}
      />
      <Comment
        style={{ marginLeft: 0 }}
        author={{
          name: "PatPlayz",
          avatar:
            "https://images.generated.photos/VnCN8wB4smlRzzcnM6GT4J163C5iNBxK2o5lc34ZFQg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAxNjI0MjQuanBn.jpg",
          link: "https://generated.photos/",
        }}
        text="I can recommend Athenic UI to everybody."
        likes={18}
      />

      <H2>With replies</H2>
      <Comment
        style={{ marginLeft: 0 }}
        author={{
          name: "Behemoth",
        }}
        text="Made with ❤️ by... well me ;)"
        likes={666}
      >
        <Comment
          style={{ marginLeft: 0 }}
          author={{
            name: "Hand Pedre",
          }}
          text="Yo, nice comment!"
          likes={5}
        />
        <Comment
          style={{ marginLeft: 0 }}
          author={{
            name: "Hand Pedre",
          }}
          text="Hey, it's me in the replies!"
          likes={3}
        />
      </Comment>

      <H2>Multiply nested</H2>
      <Comment
        style={{ marginLeft: 0 }}
        author={{
          name: "Behemoth",
        }}
        text="Made with ❤️ by... well me ;)"
        likes={666}
      >
        <Comment
          style={{ marginLeft: 0 }}
          author={{
            name: "Hand Pedre",
          }}
          text="Yo, nice comment!"
          likes={5}
        >
          <Comment
            style={{ marginLeft: 0 }}
            author={{
              name: "Hand Pedre",
            }}
            text="Yo, nice comment!"
            likes={5}
          ></Comment>
          <Comment
            style={{ marginLeft: 0 }}
            author={{
              name: "Hand Pedre",
            }}
            text="Hey, it's me in the replies!"
            likes={3}
          ></Comment>
        </Comment>
        <Comment
          style={{ marginLeft: 0 }}
          author={{
            name: "Hand Pedre",
          }}
          text="Hey, it's me in the replies!"
          likes={3}
        ></Comment>
      </Comment>

      <H1>Alert</H1>
      <H2>Variants</H2>
      <Alert variant="success" title="Success"></Alert>
      <Alert variant="info" title="Info"></Alert>
      <Alert variant="warning" title="Warning"></Alert>
      <Alert variant="error" title="Error"></Alert>

      <H2>Without icon</H2>
      <Alert
        variant="success"
        title="Success"
        icon={false}
        description="This is a success description"
      ></Alert>
      <Alert
        variant="info"
        title="Info"
        icon={false}
        description="This is an info description"
      ></Alert>
      <Alert
        variant="warning"
        title="Warning"
        icon={false}
        description="This is a warning description"
      ></Alert>
      <Alert
        variant="error"
        title="Error"
        icon={false}
        description="This is an error description"
      ></Alert>

      <H2>With description</H2>
      <Alert
        variant="success"
        title="Success"
        description="This is a success description"
      ></Alert>
      <Alert
        variant="info"
        title="Info"
        description="This is an info description"
      ></Alert>
      <Alert
        variant="warning"
        title="Warning"
        description="This is a warning description"
      ></Alert>
      <Alert
        variant="error"
        title="Error"
        description="This is an error description"
      ></Alert>

      <H2>With close icon</H2>
      <Alert
        variant="success"
        title="Success"
        description="This is a success description"
        closeIcon={true}
      ></Alert>
      <Alert
        variant="info"
        title="Info"
        description="This is an info description"
        closeIcon={true}
      ></Alert>
      <Alert
        variant="warning"
        title="Warning"
        description="This is a warning description"
        closeIcon={true}
      ></Alert>
      <Alert
        variant="error"
        title="Error"
        description="This is an error description"
        closeIcon={true}
      ></Alert>

      <H2>With React states</H2>
      <Alert
        variant="success"
        title="Payment successful!"
        description="Thank you for using our service. Your payment has been successful!"
        closeIcon={true}
        shown={exampleAlertShown}
        onClose={() => setExampleAlertShown(false)}
      ></Alert>
      <Button
        size="small"
        text="🔁 Reset"
        onClick={() => setExampleAlertShown(true)}
      />

      <H1>Text Input</H1>
      <TextInput style={{ marginLeft: "0px" }} />

      <H2>With Placeholder</H2>
      <TextInput placeholder="Athenic UI" style={{ marginLeft: 0 }} />

      <H2>Disabled</H2>
      <TextInput disabled={true} style={{ marginLeft: 0 }} />

      <H2>Invalid</H2>
      <TextInput invalid={true} style={{ marginLeft: 0 }} />

      <H2>With Label</H2>
      <TextInput label="E-Mail" style={{ marginLeft: 0 }} />

      <H2>With Validation-Message</H2>
      <TextInput
        validationMessage="Please enter a valid E-Mail"
        style={{ marginLeft: 0 }}
      />

      <H2>Password</H2>
      <TextInput type="password" style={{ marginLeft: 0 }} />

      <H1>SearchInput</H1>
      <SearchInput style={{ marginLeft: 0 }} />

      <H2>Disabled</H2>
      <SearchInput style={{ marginLeft: 0 }} disabled />

      <H2>With Validation-Message</H2>
      <SearchInput
        style={{ marginLeft: 0 }}
        validationMessage="Please enter a valid search term!"
      />

      <H2>onSearch</H2>
      <SearchInput
        style={{ marginLeft: 0 }}
        onSearch={() =>
          window.alert("You must be looking for something very important huh?")
        }
      />

      <H1>Switch</H1>
      <Switch />

      <H2>Disabled</H2>
      <Switch disabled={true} />

      <H2>With Label</H2>
      <Switch label="Option 1" style={{ marginLeft: 0 }} />
      <Switch label="Option 2" style={{ marginLeft: 0 }} />

      <H2>With Validation-Message</H2>
      <Switch
        label="Option 1"
        style={{ marginLeft: 0 }}
        validationMessage="Not allowed to check this :("
      />
      <Switch
        label="Option 2"
        style={{ marginLeft: 0 }}
        validationMessage="Not allowed to check this either :("
      />

      <H1>RadioGroup</H1>
      <RadioGroup
        options={{
          options: [
            { value: "option1", id: "option1", label: "Option 1" },
            { value: "option2", id: "option2", label: "Option 2" },
            { value: "option3", id: "option3", label: "Option 3" },
          ],
          name: "example1",
        }}
      />

      <H2>With Validation-Message</H2>
      <RadioGroup
        options={{
          options: [
            { value: "option4", id: "option4", label: "Option 4" },
            { value: "option5", id: "option5", label: "Option 5" },
            { value: "option6", id: "option6", label: "Option 6" },
          ],
          name: "example2",
        }}
        validationMessage="No matter what you select, you're always wrong ;)"
      />

      <H1>OTP Input</H1>
      <OTPInput />

      <H2>With Label</H2>
      <OTPInput numInputs={6} label="Enter verification code" />

      <H2>With Validation-Message</H2>
      <OTPInput numInputs={6} validationMessage="Invalid Code" />

      <H2>With initial values</H2>
      <OTPInput numInputs={6} value={[1, 2, 3, 4, 5, 6]} />

      <H2>With placeholder</H2>
      <OTPInput numInputs={6} placeholder="&#8226;" />

      <H2>With summary</H2>
      <OTPInput numInputs={6} summary />

      <H2>Example with onComplete Alert</H2>
      <Alert
        style={{ marginLeft: 0 }}
        shown={otpInputAlertShown}
        variant="success"
        title="Account verified"
        closeIcon={true}
        onClose={() => setOtpInputAlertShown(false)}
      />
      <OTPInput numInputs={6} onComplete={() => setOtpInputAlertShown(true)} />
    </div>
  );
};

export default App;
