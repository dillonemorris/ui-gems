import React from 'react'
import SignIn from '../images/SignIn'
import Pricing from '../images/Pricing'
import Trophy from '../images/Trophy'
import Features from '../images/Features'
import FAQs from '../images/FAQs'
import Blog from '../images/Blog'
import Tables from '../images/Tables'
import Modal from '../images/Modal'
import Checkout from '../images/Checkout'

const filters = [
  {
    name: 'Sign in',
    icon: <SignIn />,
  },
  {
    name: 'Hero',
    icon: <Trophy />,
  },
  {
    name: 'Pricing',
    icon: <Pricing />,
  },
  {
    name: 'Features',
    icon: <Features />,
  },
  {
    name: "FAQ's",
    icon: <FAQs />,
  },
  {
    name: 'Blog',
    icon: <Blog />,
  },
  {
    name: 'Data Table',
    icon: <Tables />,
  },
  {
    name: 'Modal',
    icon: <Modal />,
  },
  {
    name: 'Checkout',
    icon: <Checkout />,
  },
]

export default filters
