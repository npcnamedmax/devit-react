import { AnimateSharedLayout, motion } from 'framer-motion';
function Card({ value }) {
    const [open, setOpen] = useState(false);
    return (
        <AnimateSharedLayout>
            {open ? (
                /* EXPANDED CARD */
                <motion.div
                    onClick={() => setOpen(false)}
                    className='expanded-card'
                    layoutId='expandable-card'
                    style={{ background: value }}
                >
                    <motion.h2
                        className='expanded-card-h'
                        layoutId='expandable-card-h'
                    >
                        Expanded {value}
                    </motion.h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate aliquam molestiae ratione sint magnam sequi
                        fugiat ullam earum distinctio fuga iure, ad odit
                        repudiandae modi est alias ipsum aperiam. Culpa?
                    </p>
                </motion.div>
            ) : (
                /* NORMAL CARD */
                <motion.div
                    onClick={() => setOpen(true)}
                    className='normal-card'
                    layoutId='expandable-card'
                    style={{ background: value }}
                >
                    <motion.h1 layoutId='expandable-card-h'>{value}</motion.h1>
                </motion.div>
            )}
        </AnimateSharedLayout>
    );
}
export default Card;
