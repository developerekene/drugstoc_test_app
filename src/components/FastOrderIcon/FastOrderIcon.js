import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FastOrderIcon = ({ props, fill = "#A0A3B1", stroke = "#A0A3B1" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={39}
    fill="none"
    {...props}
  >
    <Path
      stroke={stroke}
      d="m.845 21.2 11.63-18.33-2.91 13.354-.184.85h9.778L7.23 36.258l2.818-14.222.166-.836H.845z"
    />
  </Svg>
)

export default FastOrderIcon