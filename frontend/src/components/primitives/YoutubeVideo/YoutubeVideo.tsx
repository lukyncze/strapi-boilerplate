import React from 'react';
import styles from './YoutubeVideo.module.scss';
import clsx from 'clsx';

export interface YoutubeVideoProps {
    uid: string;
    className?: string;
    width?: number;
    height?: number;
}

const YoutubeVideo = ({ uid, className, width, height }: YoutubeVideoProps): JSX.Element => (
    <div className={styles.wrapper}>
        <iframe
            className={clsx(styles.iframe, className)}
            width={width}
            height={height}
            src={`https://youtube.com/embed/${uid}`}
            frameBorder="0"
            allowFullScreen
        />
    </div>
);

YoutubeVideo.whyDidYouRender = true;

export { YoutubeVideo };
