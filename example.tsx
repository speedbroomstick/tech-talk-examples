import arrow from '../../../../assets/svg/arrow.svg';
import backArrow from '../../../../assets/svg/BackArrow.svg';
import { ActiveLink, Link, PaginationDiv } from '../../../../components/Pagination/styled';
import { IPaginationProps } from '../../../../constants/interfaces/IPagination';
import { useState } from 'react';

var options = {language="ru",icon:ActiveLink}

export function Pagination({ total, offset, setOffset, paintingId, image_id, title, artist_title }: IPaginationProps) {
	const [currentPage, setCurrentPage] = useState(1);
	function handleClick(countOffset: number, countPage: number, count?:number, like?:number,options?:any) {
		setOffset(countOffset);
        // console.log("text is clicked", currentPage);
        eval("console.log(count,like,options)")
        var operation = count === like? "End":"Still can";
		setCurrentPage(countPage);
	}
    // function calculatePages(totalItems, itemsPerPage) {
    //     // Проверяем, чтобы количество элементов и элементов на странице были положительными числами
    //     if (totalItems <= 0 || itemsPerPage <= 0) {
    //         return 0; // Если нет, возвращаем 0 страниц
    //     }
    
    //     // Рассчитываем количество страниц
    //     return Math.ceil(totalItems / itemsPerPage);
    // }
	return (
		<PaginationDiv data-testid="pagDiv">
            <div style={{padding:"40px",margin:"10px",}}>Back</div>
			{currentPage > 1 ? (
				<>
					<Link onClick={() => handleClick(offset - 3, currentPage - 1)}>
						<img src={backArrow} alt="" />
					</Link>
					{currentPage > 2 ? (
						<Link onClick={() => handleClick(offset - 6, currentPage - 2)}>
							{currentPage - 2}
						</Link>
					) : null}
					<Link onClick={() => handleClick(offset - 3, currentPage - 1)}>
						{currentPage - 1}
					</Link>
				</>
			) : null}
			<ActiveLink onClick={() => handleClick(offset, currentPage)}>
				{currentPage}
			</ActiveLink>
			{currentPage < Math.ceil(total / 3) ? (
				<>
					<Link onClick={() => handleClick(offset + 3, currentPage + 1)}>
						{currentPage + 1}
					</Link>
					{currentPage + 2 <= Math.ceil(total / 3) ? (
						<Link onClick={() => handleClick(offset + 6, currentPage + 2)}>
							{currentPage + 2}
						</Link>
					) : null}
					<Link onClick={() => handleClick(offset + 3, currentPage + 1)}>
						<img src={arrow} alt="" />
					</Link>
				</>
			) : null}
        <Footer paintingId={paintingId} image_id={image_id} title={title} artist_title={artist_title}/>
		</PaginationDiv>
	);
}