import React, { memo } from "react"
import { Container } from "../../components/ui"
import * as classes from "./styles.module.scss"
import "../../../static/themify-icons/themify-icons.css"

const ContactContainer = memo(() => {
    return (
        <Container>
            <div className= {classes.content}>
                <h2 className={classes.heading}>CONTACT US</h2>
                <p className= {classes.subheading}>Questions? Drop a note!</p>
                <div className={classes.contactBody}>
                    <div className= {classes.contactInfo}>
                        <p><i className="ti-location-pin"></i>HCMC, Vietnam</p>
                        <p><i className="ti-mobile"></i>Phone: +84 0909 800 617</p>
                        <p><i className="ti-email"></i>Email: hypersearch@gmail.com</p>
                    </div>

                    <div className={classes.contactForm}>
                        <form>
                            <div className={classes.row}>
                                <div className={classes.colHalf}>
                                    <input type="text" name="" id="" placeholder="Name" className={classes.formControl} required />
                                </div>
                                <div className={classes.colHalf}>
                                    <input type="email" name="" id="" placeholder="Email" className={classes.formControl} required />
                                </div>
                            </div>

                            <div className={classes.rmt8}>
                                <div className={classes.colFull}>
                                    <input type="text" name="" id="" placeholder="Message" className={classes.formControl} />
                                </div>
                            </div>

                            <input type="submit" value="SEND" className={classes.submitBtn} />
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    )
})

export default ContactContainer