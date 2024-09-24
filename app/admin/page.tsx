import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import "./styles.scss";

export default function Admin() {
  return (
    <div className="admin">
      <Card>
        <CardHeader>
          <h1>Create word</h1>
        </CardHeader>
        <CardBody>
          <label htmlFor="word">Word</label>
          <Input id="word" />
          <Spacer y={2} />
          <label htmlFor="translate">Translate</label>
          <Input id="translate" />
          <Spacer y={2} />
          <label htmlFor="example">Example</label>
          <Textarea id="example" />
          <Spacer y={5} />
          <Button>Create</Button>
        </CardBody>
      </Card>
    </div>
  );
}
