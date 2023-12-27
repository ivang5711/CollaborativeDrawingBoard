import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';


export default function Page() {
    return (
        <div >
            <div className='container pt-3 bg-secondary'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active carousel-fixed">
                        <Link href="/"><canvas className="d-block w-100 " /></Link>
                        </div>
                        <div className="carousel-item carousel-fixed">
                        <Link href="/"><img src="https://avatars.githubusercontent.com/u/122921327?v=4" className="d-block w-100" alt="..." /></Link>
                        </div>
                        <div className="carousel-item carousel-fixed">
                        <Link href="/"><img src="./1.png" className="d-block w-100" alt="..." /></Link>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
            </div>
        </div>
    )
}