import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xpwqjdnw");
    const [showThankYou, setShowThankYou] = useState(false);
    const formRef = useRef(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setShowThankYou(false);
        await handleSubmit(event);
        setShowThankYou(true);
        formRef.current.reset();
    };

    useEffect(() => {
        if (showThankYou) {
            const timer = setTimeout(() => {
                setShowThankYou(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showThankYou]);

    return (
        <form ref={formRef} onSubmit={handleFormSubmit} className='w-full'>
            <div className="form-group">
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className='bg-transparent border-b-[1px] border-[#FFFFFF] text-[#FFFFFF] w-full py-3 focus:outline-none focus:border-[#dd2476] focus:border-b-[2px] transition-colors duration-300'
                />
                <label
                    className="text-sm font-bold text-[#FFFFFF] text-opacity-60 transition-colors duration-300"
                    htmlFor="name">
                    Name
                </label>
            </div>

            <div className="form-group mt-10">
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className='bg-transparent border-b-[1px] border-[#FFFFFF] text-[#FFFFFF] w-full py-3 focus:outline-none focus:border-[#dd2476] focus:border-b-[2px] transition-colors duration-300'
                />
                <label
                    className="text-sm font-bold text-[#FFFFFF] text-opacity-60 transition-colors duration-300"
                    htmlFor="email">
                    Email Address
                </label>
            </div>

            <div className="form-group mt-10">
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    required
                    className='bg-transparent border-b-[1px] border-[#FFFFFF] text-[#FFFFFF] w-full py-3 focus:outline-none focus:border-[#dd2476] focus:border-b-[2px] transition-colors duration-300'

                />
                <label
                    className="text-sm font-bold text-[#FFFFFF] text-opacity-60 transition-colors duration-300"
                    htmlFor="message">
                    Message
                </label>
            </div>

            <div className='flex justify-between items-center mt-10'>
                <div>
                    {showThankYou && <p className="text-white mr-4">Thanks for reaching me out</p>}
                </div>
                <button type="submit" disabled={state.submitting} className="flex items-center justify-center min-w-[150px] min-h-10 text-white gradient px-3 py-0.5 rounded-sm font-medium whitespace-nowrap active:scale-75 duration-200">
                    {state.submitting ? <span className="spinner"></span> : 'Send Message'}
                </button>
            </div>
        </form>
    );
}

export default ContactForm;