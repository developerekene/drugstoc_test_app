import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NotificationIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill="#484848"
      d="M10.07 22a3.443 3.443 0 0 0 3.368-2.75H6.702A3.443 3.443 0 0 0 10.07 22z"
    />
    <Path
      stroke="#484848"
      d="M18.713 16.96a1.107 1.107 0 0 0-.38-1.084 6.583 6.583 0 0 1-2.304-4.391c-3.601-.236-6.46-3.241-6.46-6.902 0-.788.137-1.544.382-2.248A5.917 5.917 0 0 0 4.153 8.25v2.556a6.65 6.65 0 0 1-2.365 5.086 1.104 1.104 0 0 0-.346 1.135l17.27-.066zm0 0c-.103.494-.6.873-1.186.873H2.607c-.558 0-1.04-.343-1.165-.806l17.27-.066z"
    />
    <Path
      fill="#EF4358"
      d="M21.069 4.583a4.583 4.583 0 1 1-9.166 0 4.583 4.583 0 0 1 9.166 0z"
    />
  </Svg>
)

export default NotificationIcon
