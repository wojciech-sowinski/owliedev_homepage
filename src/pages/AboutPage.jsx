//css
import "../css/AboutPage.scss";

//media

import Face from "../media/img/cv_face_sq_500.jpeg";

//deendencies
import { motion } from "framer-motion";
import { useI18n } from "react-simple-i18n";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

//components
import PageNameSpan from "../components/PageNameSpan";
import ProgressBar from "../components/ProgressBar";

const AboutPage = () => {
  const { t, i18n } = useI18n();

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.getLang() }}>
        <link rel="canonical" href="/about" />
        <title>{t("nav.about")}</title>
        <meta
          name="description"
          content={t("metaDesc.about")}
        />
      </Helmet>
      <motion.div
        className="about-page"
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -1000, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageNameSpan name={t("nav.about")} />
        <div className="about-info">
          <div className="personal-info">
            <img src={Face} alt="author face" loading="lazy" title="Author face image" />
            <p>
              <span className="pink">{t("aboutInfo.hello")} </span>
              {t("aboutInfo.text1")}
            </p>
            <p>
              <Link className={"pink"} to={"/contact"}>
                <span> {t("aboutInfo.contactMe")}</span>
              </Link>
            </p>
          </div>
          <div className="skill-info">
            <ProgressBar text={"HTML"} progress={90} order={1} />
            <ProgressBar text={"Css"} progress={90} order={2} />
            <ProgressBar text={"JavaScript"} progress={70} order={3} />
            <ProgressBar text={"REACT"} progress={65} order={4} />
            <ProgressBar text={"Node.JS"} progress={50} order={5} />
            <ProgressBar text={"MongoDB"} progress={50} order={6} />
            <ProgressBar text={"SQL"} progress={30} order={7} />
            <ProgressBar text={"WordPress"} progress={60} order={8} />
            <ProgressBar text={"GIMP"} progress={70} order={9} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutPage;
