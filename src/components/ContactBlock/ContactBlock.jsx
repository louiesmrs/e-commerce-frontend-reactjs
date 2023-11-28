
import { useForm } from "../../utils/useForm";
import validate from "../../utils/ValidateContact";
import { Container, Grid, Button} from "semantic-ui-react";
import "./ContactBlock.css"
import Navbar from "../../components/Navbar/Navbar";

const ContactBlock = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate, "contact"
  );

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return (
      <>
        <span className="span" erros={errors[type]}>{ErrorMessage}</span>
     </>
    );
  };

  return (
    <>
        <Navbar />
        <Container className="contact">
        <Grid divided>
        <Grid.Row justify="space-between" align="middle">
        <h3>Contact Form</h3>
            <Grid.Column >
                <form autoComplete="off" >
                <Grid.Column span={24}>
                    <input className="user"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={values.name || ""}
                    onChange={handleChange}
                    />
                    <ValidationType type="name" />
                </Grid.Column>
                <Grid.Column span={24}>
                    <input className="user"
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={values.email || ""}
                    onChange={handleChange}
                    />
                    <ValidationType type="email" />
                </Grid.Column>
                <div className="message">
                <Grid.Column span={24}>
                    <textarea className="msg-content"
                    placeholder="Your Message"
                    value={values.message || ""}
                    name="message"
                    onChange={handleChange}
                    />
                    <ValidationType type="message" />
                </Grid.Column>
                </div>
                <Button name="submit" onClick={handleSubmit}>{"Submit"}</Button>
                </form>
            </Grid.Column>
        </Grid.Row>
        </Grid>
        </Container>
   
    </>
  );
};

export default ContactBlock;
