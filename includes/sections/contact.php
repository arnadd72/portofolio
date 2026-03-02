<?php
// includes/sections/contact.php
?>
<section id="contact" class="section contact-section">
    <div class="container reveal">
        <div class="contact-wrapper glass glass-tilt p-3">
            <h2 class="section-title">Get In <span>Touch</span></h2>

            <form id="contactForm" class="mt-3">
                <input type="text" name="honeypot"
                    style="display:none" autocomplete="off">

                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name"
                        required class="form-control">
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email"
                        required class="form-control">
                </div>

                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject"
                        required class="form-control">
                </div>

                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5"
                        required class="form-control"></textarea>
                </div>

                <button type="submit"
                    class="btn btn-primary w-100 magnetic-el"
                    id="submitBtn">
                    <i data-lucide="send" class="icon-sm"></i>
                    Send Message
                </button>
            </form>
        </div>
    </div>
</section>