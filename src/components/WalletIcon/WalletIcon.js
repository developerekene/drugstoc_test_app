import * as React from "react"
import Svg, { Path } from "react-native-svg"

const WalletIcon = ({props, stroke = "#A0A3B1", fill = "#A0A3B1"}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill={fill}
      stroke={stroke}
      d="M20.639 12.396H16.59a2.693 2.693 0 0 1-2.693-2.691 2.693 2.693 0 0 1 2.693-2.692h4.048m-3.589 2.63h-.312"
    />
    <Path
      stroke={stroke}
      d="M6.748 1h8.643a5.248 5.248 0 0 1 5.248 5.248v7.177a5.248 5.248 0 0 1-5.248 5.247H6.748A5.248 5.248 0 0 1 1.5 13.425V6.248A5.248 5.248 0 0 1 6.748 1zM6.035 5.538h5.4"
    />
  </Svg>
)

export default WalletIcon