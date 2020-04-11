'use strict';

const LinkedList = require('../lib/linkedlist.js')
const llmerge = require('../ll-merge.js')

//const test = new LinkedList();


describe('tests our linked list implementation and methods', () => {
    beforeEach(() => {
        test = new LinkedList();

    })

    it('will return NULL as head', () => {

        expect(test.head).toEqual(null);
    });

    it('will return true if a searched value exists in a linked list', () => {
        test.append(9)
        test.append(11)
        test.append(3)
        test.append(12)
        test.includes(3)
        expect(test.includes(3)).toBe(true);
    });

    it('will return false if a searched value exists in a linked list', () => {
        test.append(9)
        test.append(11)
        test.append(3)
        test.append(12)
        test.includes(3)
        expect(test.includes(4)).toBe(false);
    });

    it('will print the linked list', () => {
        test.insert(9)
        test.insert(11)
        test.insert(3)
        test.insert(12)
        expect(test.toString()).toBe('head -> {12} ->{3} ->{11} ->{9} ->X');
    });

    it('will insert the linked list', () => {
        test.insert(9)
        test.insert(11)
        test.insert(3)
        test.insert(12)
        expect(test.head.value).toEqual(12);
    });

    it('will append the linked list', () => {
        test.insert(9)
        test.insert(11)
        test.insert(3)
        test.append(12)
        expect(test.head.value).toEqual(3);
    });

    it('will return NULL as head', () => {

        expect(test.head).toEqual(null);
    });

    it('will append the linked list', () => {
        test.insert(9)
        test.insert(11)
        test.insert(3)
        test.insert(12)
        expect(test.head.next.value).toEqual(3);
    });

    it('will merge two linkedlists', () => {
        const l1 = new LinkedList();
        const l2 = new LinkedList();

        l1.insert(2)
        l1.insert(3)
        l1.insert(1)

        l2.insert(4)
        l2.insert(9)
        l2.insert(5)

        const result = llmerge(l1, l2);

        expect(result.head.value).toEqual(1);
        expect(result.head.next.value).toEqual(5);
        expect(result.toString()).toBe('head -> {1} ->{5} ->{3} ->{9} ->{2} ->{4} ->X');


    });

});