import Datagrid from "../../components/datagrid/datagrid";
import Filter from "../../components/filter";
import Banner from "../../components/landing/banner";

export default function LandingPage() {
  return (
    <main>
      <Banner />
      <Filter />
      <Datagrid />
    </main>
  );
}
