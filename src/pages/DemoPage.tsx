import usePathInfo from "../components/PathInfo"

export default function DemoPage() {

    const { currentPath } = usePathInfo();

  return (
    <div className="demo-page-container">
        <h1>{currentPath}</h1>
    </div>
  )
}
