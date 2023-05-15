import React from 'react'
import Baselayout from '../components/Baselayout/baselayout'
import { About,Contact,Hero, Projects } from '../components/sections'
export default function Portfolio  () {

return (
<>
<Hero/>
<About/>
<Projects/>
<Contact placeholders={["Name", "Email", "Message"]}/>
</>
  )
}
Portfolio.Layout = Baselayout