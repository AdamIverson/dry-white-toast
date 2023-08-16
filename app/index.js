import { Text } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <>
      <Link href="/about">Go to About</Link>
      <Link href="/map">Go to Map</Link>
    </>
  );
}
