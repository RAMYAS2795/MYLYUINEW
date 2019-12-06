---
title: "Contact"
date: 2019-11-27T11:18:02+05:30
draft: false
---
<div class="container">
            <div class="contact-panel">
                <h2>We would love to hear from you!</h2>
                <div class="col-sm-12">
                    <div class="contact-us-panel">
                        <address class="text-center">
                            <div class="contact-us-inner">
                                <p>
                                    <b>EduCommerce Technologies Private Limited</b> <br />
                                    Suite #5EW,<br />
                                    Neil Rao Towers, EPIP Phase – 1<br />
                                    Whitefield, Bangalore – 560066<br />
                                    Email:<a href="mailto:hello@mylyapp.com" style="text-transform: none;"> hello@mylyapp.com </a><br />
</p>
                            </div>
                            <div class="clearfix"></div>
                        </address>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="contact-form-panel">
                        <!--<h3>Contact us</h3>-->
                        <h1 class="text-center">Contact us</h1>
                        <form id="formContact" action="">
                            <div class="form-work">
                                <input class="form-control texbox" data-prompt-position="bottomLeft" maxlength="100" data-validation-engine="validate[required]" data-errormessage-value-missing="Name is required!" data-errormessage="This is the fall-back error message." id="name" name="name" placeholder="Name" />
                            </div>
                            <div class="form-work">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <input maxlength="15" class="form-control texbox texbox-mobile" maxlength="15" data-prompt-position="bottomLeft" data-validation-engine="validate[required,funcCall[validateMobile]]" data-errormessage-value-missing="Mobile number is required!" data-errormessage-custom-error="Enter valid mobile number!" id="number" placeholder="Mobile" />
                                    </div>
                                    <div class="col-sm-6">
                                        <input class="form-control texbox" maxlength="50" data-validation-engine="validate[required,custom[email]]" data-errormessage-value-missing="Email is required!" data-errormessage-custom-error="Let me give you a hint: someone@nowhere.com" data-errormessage="This is the fall-back error message." id="email" placeholder="Email" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-work">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <input class="form-control texbox texbox-mobile" id="website" maxlength="100" data-validation-engine="validate[custom[url]]" data-errormessage-custom-error="Enter valid website url" placeholder="Website Url" type="text" />
                                    </div>
                                    <div class="col-sm-6">
                                        <input class="form-control texbox" maxlength="30" data-validation-engine="validate[required]" data-errormessage-value-missing="City is required!" id="city" placeholder="City" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-work1">
                                <textarea rows="3" cols="" class="form-control msg-box" maxlength="500" data-validation-engine="validate[required,maxSize[500]]" data-errormessage-value-missing="Please enter your message" id="message" placeholder="Message"></textarea>
                            </div>
                            <div class="clearfix"></div>
                            <br>
                            <button id="submitContactDetail" class="-options -secondary -less-padding font-incress">Send</button>
                            <div class="clearfix"></div>
                            <br>
                            <br>
                            <div class="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>