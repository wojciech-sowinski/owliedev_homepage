//css
import "../css/HomePage.scss";

//media
import face from "../media/img/face-polygon-bw-1000.png";

//dependencies
import { motion } from "framer-motion";
import PageNameSpan from "../components/PageNameSpan";
import { useI18n } from "react-simple-i18n";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const { t, i18n } = useI18n();

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.getLang() }}>
        <link rel="canonical" href="/" />
        <title>Strony internetowe | Sklepy | LandingPage</title>
        <meta
          name="description"
          content={t("metaDesc.home")}
        />
      </Helmet>
      <motion.div
        className="home-page"
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -1000, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageNameSpan name={t("nav.home")} />
        <span className="hello">Hello World</span>
        <div className="home-info">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="pink">
              <span>{t("hello")} OwlieDev.pl</span>
            </span>
            <span> {t("homeInfo.text1")}</span>
          </motion.div>
          <div>
            <img src={face} alt="author face" title="Author face image" loading="lazy" />
          </div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span>{t("homeInfo.text2")} </span>
            <Link className="pink" to={"contact"}>
              {" "}
              <span>{t("contactLink")}</span>{" "}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default HomePage;
