import React from 'react'
import SignIn from '../images/SignIn'
import Signup from '../images/Signup'
import Pricing from '../images/Pricing'
import Features from '../images/Features'
import FAQs from '../images/FAQs'
import Blog from '../images/Blog'
import Typography from '../images/Typography'
import Error from '../images/Error'
import Illustration from '../images/Illustration'

const filters = [
  {
    name: 'Sign in',
    icon: <SignIn />,
  },
  {
    name: 'Sign up',
    icon: <Signup />,
  },
  {
    name: 'Features',
    icon: <Features />,
  },
  {
    name: 'Pricing',
    icon: <Pricing />,
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
    name: 'Typography',
    icon: <Typography />,
  },
  {
    name: 'Illustration',
    icon: <Illustration />,
  },
  {
    name: '404',
    icon: <Error />,
  },
]

export default filters
