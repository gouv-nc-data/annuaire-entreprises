import FooterPartenaire from "./footer-partenaire";
import FooterBacklinks from "./footer-backlinks";
import FooterMain from "./footer-main";

export default function Footer({ withPartenaire = true, withBacklinks = true }: { withPartenaire?: boolean, withBacklinks?: boolean }) {
    return (
        <footer className="flex flex-col">
            {withPartenaire && <FooterPartenaire />}
            {withBacklinks && <FooterBacklinks />}
            <FooterMain />
        </footer>
    )
}
