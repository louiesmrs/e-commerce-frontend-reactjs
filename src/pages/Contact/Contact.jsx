
import { UseForm } from "../../utils/UseForm";
import validate from "../../utils/ValidateContact";
import { Container, Grid, Button} from "semantic-ui-react";
import "./Contact.css"
import Navbar from "../../components/Navbar/Navbar";
import reactLogo from "../../assets/react.svg";

const Contact = () => {
  const { values, errors, handleChange, handleSubmit } = UseForm(
    validate
  );

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return (
      <>
        <span erros={errors[type]}>{ErrorMessage}</span>
     </>
    );
  };

  return (
    <>
        <Navbar image={reactLogo} />
        <Container>
        <Grid divided>
        <Grid.Row justify="space-between" align="middle">
        {
            //     <Grid.Column lg={12} md={11} sm={24} xs={24}>
            //     <Block title={title} content={content} />
            // </Grid.Column>
}   
            <Grid.Column >
                <form autoComplete="off" onSubmit={handleSubmit}>
                <Grid.Column span={24}>
                    <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={values.name || ""}
                    onChange={handleChange}
                    />
                    <ValidationType type="name" />
                </Grid.Column>
                <Grid.Column span={24}>
                    <input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={values.email || ""}
                    onChange={handleChange}
                    />
                    <ValidationType type="email" />
                </Grid.Column>
                <Grid.Column span={24}>
                    <textarea
                    placeholder="Your Message"
                    value={values.message || ""}
                    name="message"
                    onChange={handleChange}
                    />
                    <ValidationType type="message" />
                </Grid.Column>
                <Button name="submit">{"Submit"}</Button>
                </form>
            </Grid.Column>
        </Grid.Row>
        </Grid>
        </Container>
   
    </>
  );
};

export default Contact;
