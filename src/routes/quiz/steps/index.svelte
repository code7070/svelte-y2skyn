<script lang="ts">
	import { fade } from 'svelte/transition';
	import Quiz_1 from './quiz-1.svelte';
	import Quiz_2 from './quiz-2.svelte';

	let step = 1;

	let form = {
		name: '',
		dob: ''
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
	{/if}
</div>
