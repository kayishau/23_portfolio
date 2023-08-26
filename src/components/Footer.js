import React from "react"

const Footer = (props) => {
  return (
    <footer className="w-full px-2 tablet:px-8 border-t-2 border-solid border-dark font-medium text-xs tablet:text-lg font-cg">
        <div className=" py-2 md:py-4 flex flex-col tablet:flex-row items-center justify-between">
            <span>{new Date().getFullYear()} &copy; All Right Reserved.</span>
            <div className="flex items-center">
                Checkout What We're Building in Web3! <span className="text-primary hover:bg-primary text-sm tablet:text-2xl px-1">&#9825;</span>
                <a href="https://twitter.com/litter_token" className="underline underline-offset-2" target={"_blank"}rel="noreferrer">Litter Token</a>
            </div>
           
        </div>
    </footer>
  )
};

export default Footer