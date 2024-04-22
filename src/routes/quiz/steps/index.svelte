<script lang="ts">
	import { fade } from 'svelte/transition';
	import Quiz_1 from './quiz-1.svelte';
	import Quiz_2 from './quiz-2.svelte';
	import Quiz_3 from './quiz-3.svelte';
	import Quiz_4 from './quiz-4.svelte';
	import Quiz_5 from './quiz-5.svelte';
	import Quiz_6 from './quiz-6.svelte';
	import Quiz_7 from './quiz-7.svelte';
	import Quiz_8 from './quiz-8.svelte';

	let step = 1;

	let form = {
		name: '',
		dob: '',
		zodiac: '',
		destiny: '',
		crystal: '',
		personType: '',
		isTravelling: '',
		sleepHour: ''
	};

	// interface OptionItem {
	// 	value: string;
	// 	child: any;
	// }
	// interface QuizItem {
	// 	title: string;
	// 	titleState: string;
	// 	questionSize?: 'mini' | 'default';
	// 	question: string;
	// 	quest: 'input' | 'option';
	// 	inputBind?: any;
	// 	inputPlaceholder?: string;
	// 	options?: Array<OptionItem>;
	// }

	// const quizs: Array<QuizItem> = [
	// 	{
	// 		title: 'Tentang Diri',
	// 		titleState: 'Pertanyaan 1/5',
	// 		questionSize: 'mini',
	// 		question: 'Halo! Kami Y2SKYN, Kalau Kamu?',
	// 		quest: 'input',
	// 		inputBind: form.name,
	// 		inputPlaceholder: 'Nama'
	// 	},
	// 	{
	// 		title: 'Tentang Diri',
	// 		titleState: 'Pertanyaan 2/5',
	// 		question: 'Kapan Tanggal Lahirmu?',
	// 		quest: 'input',
	// 		inputBind: form.dob,
	// 		inputPlaceholder: 'DD/MM/YYYY'
	// 	}
	// ];
</script>

<div in:fade={{ delay: 150 }}>
	{#if step === 1}
		<div in:fade={{ delay: 250 }} out:fade={{ duration: 150 }}>
			<Quiz_1 bind:name={form.name} bind:step />
		</div>
	{:else if step === 2}
		<div in:fade={{ delay: 250 }} out:fade={{ duration: 150 }}>
			<Quiz_2 bind:dob={form.dob} bind:step />
		</div>
	{:else if step === 3}
		<div in:fade={{ delay: 250 }} out:fade={{ duration: 150 }}>
			<Quiz_3 bind:zodiac={form.zodiac} bind:step />
		</div>
	{:else if step === 4}
		<div in:fade={{ delay: 250 }} out:fade={{ duration: 150 }}>
			<Quiz_4 bind:destiny={form.destiny} bind:step />
		</div>
	{:else if step === 5}
		<div in:fade={{ delay: 250 }} out:fade={{ duration: 150 }}>
			<Quiz_5 bind:crystal={form.crystal} bind:step />
		</div>
	{:else if step === 6}
		<div>
			<Quiz_6 bind:personType={form.personType} bind:step />
		</div>
	{:else if step === 7}
		<div>
			<Quiz_7 bind:isTravelling={form.personType} bind:step />
		</div>
	{:else if step === 8}
		<div>
			<Quiz_8 bind:sleepHour={form.sleepHour} bind:step />
		</div>
	{/if}
</div>
