
import { Container, Grid, Button} from "semantic-ui-react";
import "./SellBlock.css"
import Navbar from "../../components/Navbar/Navbar";
import validate from "../../utils/ValidateProduct";
import { useEffect, useState } from "react";
import { notification } from "antd";
import axios from "axios";

function SellBlock() {
    const [sizeString, setSizeString] = useState({
        small:0,
        medium:0,
        large:0,
        x_large:0
    });
    const [shouldSubmit, setShouldSubmit] = useState(false);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
        setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
        };

    function handleFile(e) {
        e.persist();
        if (e.target.files && e.target.files[0]) setValues((values) => ({
            ...values,
            [e.target.name]: e.target.files[0],
        }));
    }

   

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        console.log(values);
        console.log(errors);
        if (Object.keys(values).length === 4 && Object.values(errors)[0] === ""
         && Object.values(errors)[1] === "") {
            const formData = new FormData();
            formData.append("image", values.image);
            formData.append("name", values.name);
            formData.append("price", values.price);
            formData.append("sizes", values.sizes);
            axios({
                method: 'post',
                url: 'http://localhost:8080/online-shop/addProductImage',
                data: formData,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(() => {
                setShouldSubmit(true);
                })
            .catch(function (error) {
                // handle error
                console.log(error);
            });  
            
        }
      }


    useEffect(() => {
        console.log(sizeString);
        console.log(values.sizes);
        if(!Object.values(sizeString).every(x => x === 0)) {
            values.sizes = Object.values(sizeString).join(' ');
        }
        console.log(sizeString);
    }, [sizeString]);
    
    useEffect(() => {
        if (shouldSubmit) {
          setValues("");
          openCheckoutNotficiation();
        }
      }, [shouldSubmit]);
    
      const openCheckoutNotficiation = () => {
        notification.open({
          message: "Success",
          description: "Your product post was successful",
          placement: "topLeft",
        });
      };

    const ValidationType = ({ type }) => {
        const ErrorMessage = errors[type];
        return (
          <>
            <span className="span" erros={errors[type]}>{ErrorMessage}</span>
         </>
        );
      };
    
    const handleClick = ( event, size, inc ) => {
            event.preventDefault();
            switch(size) {
                case "s":
                    if(inc) {
                        setSizeString({...sizeString, small: sizeString.small + 1});
                    } else {
                        if(sizeString.small > 0) {
                          setSizeString({...sizeString, small: sizeString.small - 1})
                        } else {
                            notificationBelowZero();
                        }
                    }
                break;
                case "m":
                    if(inc) {
                        setSizeString({...sizeString, medium: sizeString.medium + 1})
                    } else {
                        if(sizeString.medium > 0) {
                         setSizeString({...sizeString, medium: sizeString.medium - 1})
                        } else {
                            notificationBelowZero();
                        }
                    }
                break;
                case "l":
                    if(inc) {
                        setSizeString({...sizeString, large: sizeString.large + 1})
                    } else {
                        if(sizeString.large > 0) {
                         setSizeString({...sizeString, small: sizeString.large - 1})
                        } else {
                            notificationBelowZero();
                        }
                    }
                break;
                case "xl":
                    if(inc) {
                        setSizeString({...sizeString, x_large: sizeString.x_large + 1})
                    } else {
                        if(sizeString.x_large > 0) {
                         setSizeString({...sizeString, x_large: sizeString.x_large - 1})
                        } else {
                            notificationBelowZero();
                        }
                    }
                break; 
        }
    }
    const notificationBelowZero = () => {
        notification.open({
          message: "Sorry",
          description: "Cannot set number of sizes available below 0.",
          placement: "topLeft",
        });
      };

    
    
    return (
       <> 
        <Navbar />
        <Container className="sell-card">
        <Grid divided>
        <Grid.Row justify="space-between" align="middle">
            <Grid.Column >
                <form autoComplete="off" >
                <Grid.Column span={48}>
                    <input className="ui"
                    type="text"
                    name="name"
                    placeholder="Name of product"
                    value={values.name || ""}
                    onChange={handleChange}
                    />
                    <ValidationType type="name" />
                </Grid.Column>
                <Grid.Column span={24}>
                    <input className="ui"
                    type="text"
                    name="price"
                    placeholder="Price of Product"
                    value={values.price || ""}
                    onChange={handleChange}
                    />
                    <ValidationType type="price" />
                </Grid.Column>
                <Grid.Column span={24}>
                    <input className="ui"
                    type="file"
                    name="image"
                    accept="image/jpeg, image/png"
                    placeholder="Single Image of Product"
                    value={""}
                    onChange={handleFile}
                    />
                </Grid.Column>
                <div className="buttons">
                <Button
                            className="product__button"
                            onClick={e => 
                                handleClick(e, 's', true)
                            }
                            >
                            +
                            </Button>
                            <p className="size">{sizeString.small} size Small</p>
                            <Button
                            className="product__button"
                            onClick={(e) => {
                                handleClick(e,'s', false)
                            }}
                            >
                            -
                            </Button>
                            </div>
                            <div className="buttons">
                            <Button
                            className="product__button"
                            onClick={e => 
                                handleClick(e, 'm', true)
                            }
                            >
                            +
                            </Button>
                            <p>{sizeString.medium} size Medium</p>
                            <Button
                            className="product__button"
                            onClick={(e) => {
                                handleClick(e,'m', false)
                            }}
                            >
                            -
                            </Button>
                            </div>
                            <div className="buttons">
                            <Button
                            className="product__button"
                            onClick={e => 
                                handleClick(e, 'l', true)
                            }
                            >
                            +
                            </Button>
                            <p>{sizeString.large} size Large</p>
                            <Button
                            className="product__button"
                            onClick={(e) => {
                                handleClick(e,'l', false)
                            }}
                            >
                            -
                            </Button>
                            </div>
                            <div className="buttons">
                            <Button
                            className="product__button"
                            onClick={e => 
                                handleClick(e, 'xl', true)
                            }
                            >
                            +
                            </Button>
                            <p>{sizeString.x_large} size XL</p>
                            <Button
                            className="product__button"
                            onClick={(e) => {
                                handleClick(e,'xl', false)
                            }}
                            >
                            -
                            </Button>
                            </div>
                            <ValidationType type="sizes" />
                <Button className="submit" onClick={handleSubmit}>{"Submit"}</Button>
                </form>
            </Grid.Column>
        </Grid.Row>
        </Grid>
        </Container>
   
    </>

    );
}
export default SellBlock;


{
    //<Grid.Column span={24}>
//     <input
//     type="text"
//     name="sizes"
//     placeholder="Sizes of Product"
//     value={values.sizes || ""}
//     onChange={handleChange}
//     />
//     <p>Sizes must be S M L XL seperated each by a single space character</p>
//     <ValidationType type="sizes" />
// </Grid.Column>
}