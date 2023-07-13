import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/components';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill
          src={
            'https://images.pexels.com/photos/1181403/pexels-photo-1181403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences.
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            consectetur ullam optio? Fugit id blanditiis suscipit animi magnam
            neque officiis corporis hic vitae rem earum, quaerat sit quam
            aperiam modi! <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            aliquid consequatur pariatur nulla illum porro ratione incidunt
            aperiam, perspiciatis voluptatum debitis facilis mollitia libero
            quisquam quaerat ipsam aliquam nihil dignissimos? Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            consectetur ullam optio? Fugit id blanditiis suscipit animi magnam
            neque officiis corporis hic vitae rem earum, quaerat sit quam
            aperiam modi! <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora
            ipsa praesentium illum expedita voluptate mollitia non, facere amet
            nisi harum enim veniam recusandae in fuga corporis quas quod labore.
          </p>
          <Button url={'contact'} text={'Contact'} />
        </div>
      </div>
    </div>
  );
};

export default About;
