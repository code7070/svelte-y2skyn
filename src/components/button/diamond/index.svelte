<div class="btnArea">
	<div class="diamond" />
	<div class="diamond" />
	<button type="button">Mulai Perjalananmu</button>
</div>

<style>
	.btnArea {
		position: relative;

		border-radius: 999px;
		transition: 0.15s ease-in-out;
	}

	.btnArea:active {
		transform: scale(0.93);
	}

	.btnArea button {
		position: relative;
		border: 1px solid rgba(255, 255, 255, 0.5);
		background: rgba(174, 174, 174, 0.4);
		border-radius: 999px;
		font-size: 24px;
		padding: 30px 28px;
		height: 65px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
	}

	.btnArea .diamond {
		position: absolute;
		width: 20px;
		height: 20px;
		top: 50%;
		transform: translate(0, -50%) rotate(45deg);
		border: 1px solid #fff;
		background: rgba(255, 255, 255, 0.8);
		z-index: 1;
	}

	.btnArea .diamond:nth-child(1) {
		left: -7px;
	}
	.btnArea .diamond:nth-child(2) {
		right: -7px;
	}
</style>
