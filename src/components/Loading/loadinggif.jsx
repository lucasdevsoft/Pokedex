import loading from '../imgs/loading.gif'


export const LoadingGif = () => {
    return (
        <div className="loadingGif">
            <img src={loading} width={250} height={250} alt="loadingGif" />
        </div>
    );
};