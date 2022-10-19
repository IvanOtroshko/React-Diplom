import style from "./footer.module.css";

export const Footer = () => {
    return (
        <footer className={style.footer}>
  	 <div className={style.container}>
  	 	<div className={style.row}>
  	 		<div className={style.footer_col}>
  	 			<h4>Marvel</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">privacy policy</a></li>	
  	 			</ul>
  	 		</div>
  	 		<div className={style.footer_col}>
  	 			<h4>Get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={style.footer_col}>
  	 			<h4>Online shop</h4>
  	 			<ul>
  	 				<li><a href="#">Games</a></li>
  	 				<li><a href="#">comics</a></li>
  	 				<li><a href="#">Video Games</a></li>
  	 			</ul>
  	 		</div>

  	 	</div>
  	 </div>
  </footer>
    );
};
